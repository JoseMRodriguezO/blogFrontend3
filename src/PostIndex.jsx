export function PostIndex(props) {
  return (
    <div>
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <img src={post.url} />
          <p>Width: {post.width}</p>
          <p>Height: {post.height}</p>
        </div>
      ))}
    </div>
  );
}
