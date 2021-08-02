import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
    return fetch(apiUrl).then(res => res.json())
        .catch(err => {
            throw err;
        })
};


function* fetchUsers() {
    try {
        yield delay(2000)
        const users = yield call(getApi);

        yield put({ type: 'GET_USERS_SUCCESS', users: users });

    }
    catch (err) {
        yield put({ type: 'GET_USERS_FAILED', message: err.message });
    }
}

export default function* userSagaListener() {

    yield takeLatest('GET_USERS_REQUESTED', fetchUsers)

}


