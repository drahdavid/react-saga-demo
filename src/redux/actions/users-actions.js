import * as type from '../types';


export function getUsers() {
    return {
        type: type.GET_USERS_REQUESTED,
    }
}

export function stopSearching() {
    return {
        type: 'STOP_BACKGROUND_SYNC',
    }
}