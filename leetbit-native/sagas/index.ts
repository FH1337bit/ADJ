import { all, put, takeEvery} from "redux-saga/effects";
import getCats from "../axios";

export function* rootSaga() {
    yield all([
        catsSaga(),
    ]);
}

function* getData() {
    const newOrder: string = yield getCats();
    yield put({
        type: "GET_CATS_SUCCESS",
        id: newOrder,
    });
}

export function* catsSaga() {
    yield takeEvery("GET_CATS_REQUESTED", getData);
}
