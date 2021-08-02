import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
    return fetch(apiUrl).then(res => res.json())
        .catch(err => {
            throw err;
        })
};


function* fetchUsers(action) {
    try {

        const users = yield call(getApi);

        yield put({ type: 'GET_USERS_SUCCESS', users: users });

    }
    catch (err) {
        yield put({ type: 'GET_USERS_FAILED', message: err.message });
    }
}

export default function* userSagaListener() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers)

}


