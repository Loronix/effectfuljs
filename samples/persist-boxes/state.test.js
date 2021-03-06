import * as R from "@effectful/es-persist-serialization";
import { saveLocal } from "./state";

const getItem = jest.fn();
const setItem = jest.fn();

global.localStorage = { getItem, setItem };

test("saveLocal", () => {
  let cb, ce;
  const exit = {
    resume() {
      cb();
    },
    reject(e) {
      cb(e);
    }
  };
  const res = new Promise((r, e) => ((cb = r), (ce = e)));
  expect.assertions(9);
  async function* data() {
    yield { type: "START" };
    yield { type: "DONE" };
    yield { type: "DELETE" };
    yield { type: "DONE" };
  }
  R.regOpaqueObject(exit, "saveLocalExit");
  R.regOpaqueObject(data, "saveLocalData");
  (async () => {
    if (!(await R.managed)) return;
    for await (const i of saveLocal(data()))
      expect(R.write(i)).toMatchSnapshot();
    expect(getItem).toHaveBeenLastCalledWith("boxes");
    expect(setItem.mock.calls).toMatchSnapshot();
  })()[R.awaitSymbol](exit);
  return res;
});
