import * as R from "ramda"
import * as Kit from "./kit"
import {Tag,produce,consume,symbol} from "estransducers"
import * as assert from "assert"
import * as Block from "./block"
import * as Uniq from "./uniq"
import * as Debug from "./debug"

export const assignLabels = R.pipe(
  function* markLastRet(s) {
    s = Kit.auto(s)
    yield s.take()
    const b = yield* s.findPos(Tag.body)
    yield b
    if (b != null && b.type === Tag.BlockStatement) {
      yield (yield* s.findPos(Tag.body))
      const j = yield* s.sub()
      if (j != null && j.type === Tag.ReturnStatement) {
        j.value.last = true
      }
    }
    yield* s
  },
  Array.from,
  function* assignLabels(s) {
    let labels = []
    const sl = Kit.auto(s)
    function* walk(labs,map,loc) {
      for(const i of sl.sub()) {
        yield i
        if (i.enter) {
          switch(i.type) {
          case Tag.LabeledStatement:
            yield* walk([...labs,i.value.node.label.name],map)
            break
          case Tag.BlockStatement:
            let bmap = map
            if (labs.length) {
              bmap = new Map(map)
              i.value.ctrl = labs
              const lname = labs[0]
              for(const i of labs)
                bmap.set(i,lname)
            }
            yield* walk([],bmap)
            break
          case Tag.WhileStatement:
          case Tag.DoWhileStatement:
          case Tag.ForStatement:
          case Tag.SwitchStatement:
          case Tag.ForInStatement:
          case Tag.ForOfStatement:
            const lmap = new Map(map)
            const lname = labs.length === 0 ? "#" : labs[0]
            i.value.ctrl = [lname]
            lmap.set("#",lname)
            for(const i of labs)
              lmap.set(i,lname)
            yield* walk([],lmap)
            break
          case Tag.ReturnStatement:
            if (!i.value.last) {
              i.value.jump = "#ret"
              i.value.exit = true
            }
            break
          case Tag.ContinueStatement:
          case Tag.BreakStatement:
            const lab = i.value.node.label
            const ln = lab == null ? "#" : lab.name
            if (!(i.value.jump = map.get(ln)))
              throw new Error(`no such label ${ln}`)
            i.value.exit = true
            break
          }
        }
      }
    }
    yield sl.peel()
    yield* walk(["#ret"],new Map([["#ret","#ret"]]))
    yield* sl.leave()
  })
  
export const scope = symbol("scope","ctrl")
export const jump = symbol("jump","ctrl")

export const removeLabeldStatement = R.pipe(
  function(s) {
    const sl = Kit.auto(s)
    function* walk() {
      for(const i of sl.sub()) {
        if (i.value.eff && i.type === Tag.LabeledStatement) {
          if (i.enter) {
            yield sl.enter(i.pos,Kit.Subst)
            yield* walk()
            yield* sl.leave()
          }
          continue
        }
        yield i
      }
    }
    return walk()
  },
  Kit.completeSubst)

//TODO: to 2 steps, marking unwinde + refs to jumps separately
export function recalc(s) {
  const sa = Kit.toArray(s)
  const sl = Kit.auto(sa)
  const stack = []
  function walk(lab) {
    for(const i of sl.sub()) {
      if (i.enter) {
        stack.unshift(i.value)
        if (i.value.ctrl != null) {
          const nlab = Object.create(lab)
          i.value.cntRefs = []
          i.value.brkRefs = []
          for(const j of i.value.ctrl)
            nlab[j] = i.value
          walk(nlab)
        } else if (i.value.jump != null) {
          const ref = lab[i.value.jump]
          i.value.jumpRef = ref
          if (i.type === Tag.ContinueStatement) {
            ref.cntRefs.push(i.value)
          } else {
            ref.brkRefs.push(i.value)
          }
          for(const j of stack) {
            if (j === ref)
              break
            j.unwind = true
          }
        }
      }
      if (i.leave)
        stack.shift()
    }
  }
  walk({})
  return sa
}

export function recalcUnwind(s) {
  const sa = Kit.toArray(s)
  const stack = []
  for(const i of sa) {
    const v = i.value
    if (v.jumpRef != null) {
      for(const j of stack) {
        if (j === v.jumpRef)
          break
        j.unwind = true
      }
    }
    if (i.enter && !i.leave)
      stack.unshift(v)
    else if (i.leave)
      stack.shift()
  }
  return sa
}

export function* rmLastRet(s) {
  s = Kit.auto(s)
  for(const i of s) {
    if (i.type === Tag.ReturnStatement) {
      const j = s.curLev()
      if (j != null && j.value.eff) {
        s.peel(j)
        yield s.enter(i.pos,Tag.ExpressionStatement,{eff:true})
        yield s.enter(Kit.setPos(j,Tag.expression))
        yield* s.sub()
        yield* s.leave()
        yield* s.leave()
        Kit.skip(s.leave())
        continue
      }
    }
    yield i
  }
}

export const injectBlock = R.pipe(
  recalc,
  function* injectBlock(s) {
    const sl = Kit.auto(s)
    function labName(i) {
      let n = i.value.ctrl.filter(v => v !== "#")[0]
      if (n != null)
        return n
      return "label"
    }
    function* walk() {
      for(const i of sl.sub()) {
        if (i.value.ctrl && i.value.eff) {
          assert.ok(i.enter)
          const lab = sl.label()
          let labels = i.value.ctrl
          const top = i.value.ctrl[0] === "#ret"
          let pos = i.pos
          if (i.value.ctrlName != null
              || i.value.brkRefs && i.value.brkRefs.length)
          {
            yield sl.enter(i.pos,Tag.ExpressionStatement)
            const node = {top,
                          name:i.value.ctrlName || top && "scope" || "block"}
            yield sl.enter(Tag.expression,scope,{node,ctrl:i.value.ctrl.sort(),
                                                 expr:true,bind:true})
            i.value.ctrl = null
            for(const j of i.value.brkRefs)
              j.dst = node
            pos = Tag.body
            if (i.type !== Tag.BlockStatement) {
              yield sl.enter(pos,Tag.BlockStatement)
              yield sl.enter(Tag.body,Tag.Array)
              pos = Tag.push
            }
          }
          yield sl.peel(Kit.setPos(i,pos))
          yield* walk()
          yield* lab()
          continue
        }
        if (i.value.jump != null && i.value.eff) {
          if (i.enter) {
            const lab = sl.label()
            let pos = i.pos
            //TODO: after implicit casts are in this may be removed
            if (i.value.jumpKind !== "gen") {
              yield sl.enter(i.pos,Tag.ExpressionStatement)
              pos = Tag.expression
            }
            yield sl.enter(pos,jump,{
              bind: true,
              jump: i.value.jump,
              node: { dst:i.value.dst }})
            yield sl.enter(Tag.push,Kit.Subst)
            yield* walk()
            yield* lab()
          }
          continue
        }
        yield i  
      }
    }
    yield* walk()
  },
  Kit.completeSubst
)

export const interpret = R.pipe(function* interpret(s) {
  const sl = Kit.auto(s)
  const uniq = Uniq.store(sl)
  function* walk() {
    for(const i of sl.sub()) {
      switch(i.type) {
      case scope:
        if (i.enter) {
          const lab = sl.label()
          yield sl.enter(i.pos, Block.effExpr)
          yield sl.enter(Tag.expression,Tag.CallExpression)
          yield* Kit.packId(sl, Tag.callee, i.value.node.name)
          yield sl.enter(Tag.arguments, Tag.Array)
          yield sl.enter(Tag.push,Tag.ArrowFunctionExpression)
          yield sl.enter(Tag.params,Tag.Array)
          let labs = i.value.ctrl.filter(v => v !== "#")
          if (labs.length === 0)
            labs = ["label"]
          labs = labs.map(j => [j,uniq(j[0] === "#" ? j.slice(1) : j)])
          const lmap = i.value.node.lmap = new Map([["#",labs[0][1]],...labs])
          for(const j of labs)
            yield sl.tok(Tag.push,Tag.Identifier,{node:j[1]})
          yield* sl.leave()
          // TODO: probably it is always aready body
          yield sl.enter(Tag.body,Kit.Subst)
          yield* walk()
          yield* lab()
        }
        break
      case jump:
        if (i.enter) {
          const lab = sl.label()
          yield sl.enter(i.pos, Block.effExpr)
          yield sl.enter(Tag.expression,Tag.CallExpression)
          yield sl.tok(Tag.callee,Tag.Identifier,
                    {node:i.value.node.dst.lmap.get(i.value.jump)})
          yield sl.enter(Tag.arguments,Tag.Array)
          yield* sl.sub()
          yield* lab()
        }
        break
      default:
        yield i
      }
    }
  }
  yield* walk()
},Kit.completeSubst)


