import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-12 justify-between text-sm shadow-md">
      {Array.from({ length: 12 }).map((post, index) => (
        <Post key={`${post}-${index}`} />
      ))}
    </div>
  );
}

export default Feed;
