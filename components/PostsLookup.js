import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const cache = setupCache({
  maxAge: 30,
});

export default function PostsLookup() {
  const [postData, setPostData] = useState([]);

  const fetchPosts = () => {
    const api = axios.create({
      adapter: cache.adapter,
    });

    api({ url: POSTS_URL, method: "GET" }).then((res) => {
      setPostData(res.data);
      cache.store.length().then((res) => console.log(`cache store length: ${res}`));
      console.log("Cache store length:", length);
    });
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(() => {
      fetchPosts();
    }, 60_000);
    // close interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="post-responses">
      {postData.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}
