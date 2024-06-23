import Image from "next/image";
import React from "react";

function AddPost() {
  return (
    <div className="bg-white p-4 rounded-lg flex gap-4 justify-between text-sm ">
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/26088712/pexels-photo-26088712/free-photo-of-woman-standing-in-entrance.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        width={48}
        height={48}
        className="size-12 object-cover rounded-full"
      />

      {/* Post */}
      <div className="flex-1">
        {/*/ Text Input */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="size-5 object-cover cursor-pointer self-end"
          />
        </div>

        {/*/ Post Option */}
        <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt="addimage"
              width={20}
              height={20}
              className="size-5 object-cover cursor-pointer self-end"
            />
            Photo
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt="addVideo"
              width={20}
              height={20}
              className="size-5 object-cover cursor-pointer self-end"
            />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt="poll"
              width={20}
              height={20}
              className="size-5 object-cover cursor-pointer self-end"
            />
            Poll
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt="addevent"
              width={20}
              height={20}
              className="size-5 object-cover cursor-pointer self-end"
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
