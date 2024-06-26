import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div className="flex flex-col gap-4 border border-red-200">
      {/* User */}
      <div className="flex-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26093506/pexels-photo-26093506/free-photo-of-portrait-of-a-pretty-brunette-leaning-on-a-stool.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={40}
            height={40}
            className="size-10 object-cover rounded-full"
          />
          <span className="font-medium">Jan McBridge</span>
        </div>

        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="size-4 object-cover"
        />
      </div>

      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative border">
          <Image
            src="https://images.pexels.com/photos/20347150/pexels-photo-20347150/free-photo-of-landscape-of-countryside-and-volcano-behind-on-java-in-indonesia.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          perspiciatis voluptas ab dolore nostrum totam iure veniam fugiat
          maxime beatae minima eaque odit reiciendis quia sed tempore? Quae,
          dolores itaque. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus, perspiciatis voluptas ab dolore nostrum totam iure
          veniam fugiat maxime beatae minima eaque odit reiciendis quia sed
          tempore? Quae, dolores itaque.
        </p>
      </div>

      {/* Interaction */}
      <div className="flex-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              width={16}
              height={16}
              className="object-cover rounded-md cursor-pointer"
              role="button"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              12k <span className="hidden md:inline">likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              width={16}
              height={16}
              className="object-cover rounded-md cursor-pointer"
              role="button"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              645 <span className="hidden md:inline">comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              width={16}
              height={16}
              className="object-cover rounded-md cursor-pointer"
              role="button"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              3.6k <span className="hidden md:inline">shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
