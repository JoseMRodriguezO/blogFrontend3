import axios from "axios";
import { useState, useEffect } from "react";
import { PostIndex } from "./PostIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
export function Content() {
  // const photos = [ these lines were to test my index function
  //   { id: 1, name: "Fist", url: "https://via.placeholder.com/150", width: 150, height: 150 },
  //   { id: 2, name: "second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  // ];

  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PostIndex posts={posts} />
    </div>
  );
}
