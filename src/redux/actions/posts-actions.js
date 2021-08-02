import * as type from '../types';


export function getPosts() {
    return {
        type: type.GET_POSTS_REQUESTED,
    }
}
