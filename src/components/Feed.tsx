import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <div className="card flex flex-col gap-12 justify-between text-sm">
      {Array.from({ length: 12 }).map((post, index) => (
        <Post key={`${post}-${index}`} />
      ))}
    </div>
  );
}

export default Feed;
