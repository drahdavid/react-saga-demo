

export const filterPostsTitle = (posts) => {

    let filteredPosts = [posts.reduce((map, obj) =>
        map.set(obj.userId, obj), new Map()).values()];

    let postFilteredPosts = filteredPosts.map(el => [...el]).flat();

    return postFilteredPosts;

}

