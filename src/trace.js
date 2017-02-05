import * as R from "ramda"
import generate from "babel-generator"
import * as T from "babel-types"
import {symbol,symName} from "estransducers"
const MAX_TRACE_CODE_LEN = 100
const TYPE_SIZE = 20

/**
  * outputs short description of AST node
  */ 
export function cg(ast, opts = {}) {
  var res
  if (ast == null) {
    // console.error("<NULL>")
    return "<NULL>"
  }
  try {
    if (Array.isArray(ast)) {
      ast = ast.length > 0 && T.isExpression(ast[0]) 
        ? T.sequenceExpression(ast)
        : T.blockStatement(ast)
    }
    res = generate(ast,opts,"").code
  } catch (e) {
    if (ast.type != null)
      console.error(e.stack)
  }
  if (res != null)
    return res 
  return "!!" + opts.compact ? JSON.stringify(ast) : JSON.stringify(ast,null,2)
}

/**
  * same as `cg` but using compact syntax
  */
export function ccg(ast) {
  return cg(ast,{compact:true})
}

const enterStyles = [
  'background: #222; color: #bada55',
  'background: #ee5757; color: black',
  'background: #d3349; color: #8699a4',
]

const leaveStyles = [
  'color: #ee5757; background: black',
  'color: #d3349; background: #8699a4',
]

let traceNum = 0

/**
  * adds some colors into the trace
  */
export function* colors(s) {
  const et = enterStyles[traceNum % enterStyles.length] + ";font-size:1.5em"
  const lt = leaveStyles[traceNum % leaveStyles.length]
  for(const i of s) {
    if (!i.style)
      i.style = i.enter ? et : lt
    yield i
  }
}

/**
  * translates token stream to a stream suitable for tracing
  */
export function* wrap(s) {
  let level = 0, index = 0
  for(const i of s) {
    let short = ccg(i.value && i.value.node ? i.value.node : i.value)
    if (short.length > MAX_TRACE_CODE_LEN)
      short = short.substr(0,MAX_TRACE_CODE_LEN) + "... "
    const dir = i.enter ? (i.leave ? "*" : ">") : (i.leave ? "<" : "-")
    let ty = symName(i.pos)
    if (i.type !== ty)
      ty += ":" + symName(i.type)
    /*
    if (ty.length < TYPE_SIZE) 
      ty += (new Array(TYPE_SIZE - ty.length)).join(" ")
    else if (ty.length >= TYPE_SIZE)
      ty = ty.substr(0,TYPE_SIZE-1)
      */
    if (i.enter)
      level++
    yield {enter:i.enter,
           leave:i.leave,
           pack:i,
           obj:i.value,
           prefix:"",
           short,
           flags:[],
           flagsStyles:[],
           dir,
           ty,
           level,
           index:++index}
    if (i.leave)
      level--
  }
}

/**
  * adds `prefix` string to beginning of each line 
  */
export const prefix = R.curry(function* prefix(prefix,s) {
  prefix+=": "
  for(const i of s) {
    if (!i.prefix)
      i.prefix = prefix
    yield i
  }
})

/**
  * wraps each complex node with `group/groupEnd`
  */ 
export function* group(s) {
  var i
  for(i of s) {
    if (i.enter && !i.leave) {
      const groupMsg = i.groupMsg || [`${i.prefix}: ${i.ty}`]
      if (i.collapsed)
        console.groupCollapsed(...groupMsg)
      else
        console.group(...groupMsg)
    }
    yield i
    if (i.leave && !i.enter) {
      console.groupEnd()
    }
  }
  if (i != null) {
    if (i.level !== 0) {
      for(let i = 0; i < i.level; i++)
        console.groupEnd()
    }
  }
}

/**
  * does actual `console.log` calls
  */
export function* complete(s) {
  var i
  for(i of s) {
    console.log(
      `%c${i.prefix}%c[${i.level}:${i.index}]: %c${i.dir} %c${i.ty} %c[${i.flags.join("|")}%c] %c${i.short}%c`,
      i.prefixStyle || "",
      i.levelStyle || "",
      i.dirStyle || "font-size:x-large;font-weight: bolder",
      i.tyStyle || "",
      "",...i.flagsStyles,"",
      i.style || "",
      "",
      i.obj)
    yield i.pack
  }
  if (i == null) {
    console.log("empty")
  } else {
    if (i.level !== 1)
      console.log(`${i.prefix}mismatched level ${i.level}`)
    console.log(`${i.prefix}len=${i.index+1}`)
  }
}

const defaults = R.pipe(colors, propagateCollapsed, group, complete)

/**
  * if specified in options it disables groupings and colorings
  */
export const raw = {}

function impl(opts) {
  const defs = !Array.isArray(opts) || opts.indexOf(raw) === -1
        ? defaults
        : v => v
  const proc = opts.substr != null
        ? prefix(opts) 
        : Array.isArray(opts)
        ? R.pipe(...opts.map(v => v.substr ? prefix(v) : v))
        : opts.apply != null 
        ? opts
        : v => v
  //const defs = defaults
  //const proc = prefix(opts)
  return R.pipe(wrap,proc,defs)
}

/**
  * outputs stream into console, optionally adding colors and groupings  
  */
export const of = R.curry((opts, s) => impl(opts)(s))

/**
  * eager version of `of`
  */
export const all = R.curry((opts,s) => R.pipe(impl(opts),Array.from)(s))

export default of

export function* propagateCollapsed(s) {
  const stack = [], buf = []
  for(const i of s) {
    if (i.enter) {
      if (i.collapsed === false) {
        for(const j of stack)
          j.collapsed = false
        stack.length = 0
      }
      else
        stack.push(i)
    }
    if (i.leave)
      if (stack.length)
        stack.pop().collapsed = true
    if (stack.length === 0) {
      for(const j of buf)
        yield j
      yield i
      buf.length = 0
    } else
      buf.push(i)
  }
  for(const i of buf)
    yield i
}

export const highlight = R.curry(function* highlight(pred, s) {
  for(const i of s) {
    if (i.leave) {
      if (pred(i.pack))
        i.tyStyle = i.dirStyle = "color:purple;font-size:large"
    }
    if (i.enter) {
      if (pred(i.pack)) {
        i.collapsed = false
        i.tyStyle = i.dirStyle = "color:blue;font-style:italic;font-size:x-large"
      }
    }
    yield i
  }
})
