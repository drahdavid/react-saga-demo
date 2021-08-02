import { combineReducers } from "redux";
import users from "./users";
import posts from "./posts";

const rootReducer = combineReducers({
    users: users,
    posts: posts
});

export default rootReducer;