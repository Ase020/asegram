import Link from "next/link";
import React from "react";
import FriendRequest from "./FriendRequest";

function FriendRequests() {
  return (
    <div className="card text-sm flex flex-col gap-4">
      <div className="flex-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <FriendRequest />
        <FriendRequest />
        <FriendRequest />
      </div>
    </div>
  );
}

export default FriendRequests;
