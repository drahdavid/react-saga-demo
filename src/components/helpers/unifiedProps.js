export const unifiedProps = (users, filteredPosts) => {
  if (users && filteredPosts) {
    users.forEach((el, i) => {
      el.title = filteredPosts[i].title;
    });
  }
  return;
};
