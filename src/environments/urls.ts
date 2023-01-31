export const urls = {
  getPosts: 'https://jsonplaceholder.typicode.com/posts',
  getCommentsByPost: (postId: number) => `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
};