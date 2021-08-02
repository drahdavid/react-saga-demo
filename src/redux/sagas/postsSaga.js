import { call, put, delay, takeLatest } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getApi() {
    return fetch(apiUrl).then(res => res.json())
        .catch(err => {
            throw err;
        })
};


function* fetchPosts() {
    try {
        yield delay(2000)
        const users = yield call(getApi);

        yield put({ type: 'GET_POSTS_SUCCESS', users: users });

    }
    catch (err) {
        yield put({ type: 'GET_POSTS_FAILED', message: err.message });
    }
}

export default function* postsSagaListener() {
    yield takeLatest('GET_POSTS_REQUESTED', fetchPosts)

}


