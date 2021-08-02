import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getApi() {
    return fetch(apiUrl).then(res => res.json())
        .catch(err => {
            throw err;
        })
};


function* fetchPosts(action) {
    try {

        const users = yield call(getApi);

        yield put({ type: 'GET_POSTS_SUCCESS', users: users });

    }
    catch (err) {
        yield put({ type: 'GET_POSTS_FAILED', message: err.message });
    }
}

function* postsSagaListener() {
    yield takeEvery('GET_POSTS_REQUESTED', fetchPosts)

}


export default postsSagaListener;