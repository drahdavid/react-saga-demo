
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users-actions";
import { getPosts } from '../redux/actions/posts-actions';
import { filterPostsTitle } from "./helpers/filterPostsTitle";
import { unifiedProps } from "./helpers/unifiedProps";

import Card from "./Card";

const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);
    const loadingUsers = useSelector(state => state.users.loading);
    const errorUsers = useSelector(state => state.users.error);


    const posts = useSelector(state => state.posts.users);
    const loadingPosts = useSelector(state => state.posts.loading);
    const errorPosts = useSelector(state => state.posts.error)

    const filteredPosts = posts && filterPostsTitle(posts);

    unifiedProps(users, filteredPosts); // Agrego propiedades de filteredPosts a users para renderizar a través de 1 array

    console.log(users);

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPosts());
    }, []);




    return (
        <>
            {loadingUsers && loadingPosts &&
                <div class="alert alert-success" role="alert">
                    Loading...
                </div>
            }

            {users.length > 0 && users.map((user) => {
                return <Card posts={posts} title={user.title} user={user} key={user.id} />
            })}

            {users.length <= 0 && !loadingUsers && !loadingPosts &&
                <div class="alert alert-danger" role="alert">
                    No Users Available!
                </div>}
            {errorUsers && errorPosts && !loadingUsers && !loadingPosts && <p>{errorUsers}</p>}
        </>

    )
};

export default Users;