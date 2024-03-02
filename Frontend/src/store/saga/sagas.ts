import { spawn, all } from "redux-saga/effects";
import mainSaga from "./mainSaga";

export default function* rootSaga() {
  yield all([
    spawn(mainSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
  ]);
}
