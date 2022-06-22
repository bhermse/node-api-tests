export default function Post({ post }) {
  return (
    <div>
      <div className="post-title">{post.title}</div>
      <div className="post-body">{post.body}</div>
    </div>
  );
}
