import { all } from 'redux-saga/effects';
import userSagaListener from './userSaga';
import postsSagaListener from './postsSaga';

export default function* rootSaga() {
    yield all([
        userSagaListener(),
        postsSagaListener()
    ])
}