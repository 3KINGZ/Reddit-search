import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import axios from "axios";
import Logo from "./reddit.png";
import Loading from "./Ellipsis-1s-200px.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const input = useRef();

  const showRedditSearch = () => {
    setSearch(input.current.value);
  };

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${search}.json`)
      .then((response) => {
        const posts = response.data.data.children.map((obj) => obj.data);
        setPosts(posts);
      })
      .catch((error) => {
        setError(
          "Either the post isn't available on reddit or an error occured"
        );
      });
  }, [search]);

  return (
    <div className="container">
      <Header
        search={search}
        refInput={input}
        onRedditSearch={showRedditSearch}
      />
      {posts.length === 0 ? (
        (
          <div className="loading-image">
            <img src={Loading} alt="post loading" />
          </div>
        ) || <h1>{error}</h1>
      ) : error ? (
        <h1>error</h1>
      ) : (
        posts.map((post) => (
          <Post
            votes={post.ups}
            img={post.thumbnail ? post.thumbnail : Logo}
            link={post.permalink}
            title={post.title}
            author={post.author}
            comments={post.num_comments}
          />
        ))
      )}
    </div>
  );
}

export default App;
