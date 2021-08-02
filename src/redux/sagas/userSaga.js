import { call, delay, put, takeEvery, takeLatest, cancelled, cancel, take } from 'redux-saga/effects';

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
    finally {
        if (yield cancelled())
            yield put({ type: 'GET_USERS_FAILED', message: 'Error' });
    }

}

export default function* userSagaListener() {

    yield takeLatest('GET_USERS_REQUESTED', fetchUsers);

    yield take('STOP_BACKGROUND_SYNC');

    yield cancel(fetchUsers);

}


