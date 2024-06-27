"use client";

import Image from "next/image";
import React from "react";

function Comments() {
  return (
    <div className="">
      {/* Write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26018022/pexels-photo-26018022/free-photo-of-a-vase-of-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="size-8 object-cover rounded-full"
        />

        <div className="flex items-end justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full gap-4">
          <textarea
            className="bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={16}
            height={16}
            className="object-cover cursor-pointer"
            role="button"
          />
        </div>
      </div>

      {/* Comments */}
      <div className="">
        <div className="flex justify-between gap-4 mt-6">
          <Image
            src="https://images.pexels.com/photos/26018022/pexels-photo-26018022/free-photo-of-a-vase-of-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="size-10 object-cover rounded-full"
          />

          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Jeremy Welch</span>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              tempore totam eum dignissimos, ullam aut. Eos sit, nihil officia,
              in alias cupiditate nemo tenetur illum id numquam, beatae quasi
              magni?
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-4">
              <div className="flex items-center gap-4">
                <Image
                  className="size-3 cursor-pointer"
                  src="/like.png"
                  alt="like"
                  width={12}
                  height={12}
                />

                <span className="text-gray-300">|</span>
                <span className="text-gray-500">421 likes</span>
              </div>

              <div className="">Reply</div>
            </div>
          </div>

          <Image
            className="size-4 cursor-pointer"
            src="/more.png"
            alt="more"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
