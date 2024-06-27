import Image from "next/image";
import React from "react";

function FriendRequest() {
  return (
    <div className="flex-between">
      <div className="flex items-center gap-3">
        <Image
          src="https://images.pexels.com/photos/26186220/pexels-photo-26186220/free-photo-of-a-man-standing-with-his-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={40}
          height={40}
          className="object-cover rounded-full size-10"
        />
        <span className="font-semibold">Nannie Christensen</span>
      </div>
      <div className="flex items-center justify-end gap-2.5">
        <Image
          src="/accept.png"
          alt="accept"
          width={20}
          height={20}
          className="size-5 rounded-full cursor-pointer"
        />
        <Image
          src="/reject.png"
          alt="reject"
          width={20}
          height={20}
          className="size-5 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FriendRequest;
