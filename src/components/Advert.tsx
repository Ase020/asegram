import Image from "next/image";
import React from "react";

interface AdvertProps {
  size: "sm" | "md" | "lg";
}

function Advert({ size }: AdvertProps) {
  return (
    <div className="card text-sm">
      <div className="flex-between font-medium text-gray-500">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="cursor-pointer"
          role="button"
        />
      </div>

      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/21050507/pexels-photo-21050507/free-photo-of-an-elegant-woman-with-an-umbrella.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/11720715/pexels-photo-11720715.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Restaurant</span>
        </div>

        <p
          className={
            size === "sm"
              ? "text-xs line-clamp-2"
              : size === "md"
              ? "text-sm line-clamp-4"
              : "text-sm"
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          omnis ex, temporibus quae cumque odit corrupti est quaerat accusantium
          placeat minus aut nostrum neque voluptatum dicta totam in porro
          inventore!
        </p>

        <button className="ext-xs text-gray-500 bg-gray-200 p-2 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Advert;
