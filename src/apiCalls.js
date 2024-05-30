export const postLoader = async ({ params = {}, request: { signal } }) => {
  // console.log(params.postId);
  const { postId } = params;
  const url = (!postId) ? 'http://127.0.0.1:3000/posts/': `http://127.0.0.1:3000/posts/${postId}`
  const postResponse = await fetch(url , { signal });
  if (!postResponse.ok) throw new Error('Failed to fetch post');
  const post = await postResponse.json();


  // comments
  let postComments
  if (postId) {
    const urlComment = `http://127.0.0.1:3000/posts/${postId}/comments`;
    const commentPostResponse = await fetch(urlComment, { signal });
    if (!commentPostResponse.ok) throw new Error('Failed to fetch comments');
    postComments = await commentPostResponse.json();
    console.log(postComments);

  }


  return { post , postComments };
}