import React from "react";
import CounterView from "./features/counter/CounterView";
import "./App.css";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <div>
      <CounterView/>
      <PostsView/>
    </div>
  )
}

export default App;
