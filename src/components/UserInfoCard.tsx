import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserInfoCard({ userId }: { userId: string }) {
  return (
    <div className="card text-sm flex flex-col gap-4">
      <div className="flex-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/profile/ase" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-black text-base">Cody McCormick</span>
          <span className="text-sm">@cormick</span>
        </div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
          neque quos repellat praesentium pariatur.
        </p>

        <div className="flex items-center gap-2">
          <Image
            src="/map.png"
            alt="map"
            width={16}
            height={16}
            className="object-contain size-4"
          />
          <span className="">
            Living in <b>Nairobi</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/school.png"
            alt="school"
            width={16}
            height={16}
            className="object-contain size-4"
          />
          <span className="">
            Went to <b>Highrise High School</b>
          </span>
        </div>

        <div className="flex items-cen ter gap-2">
          <Image
            src="/work.png"
            alt="work"
            width={16}
            height={16}
            className="object-contain size-4"
          />
          <span className="">
            Works at <b>Microsoft Inc</b>
          </span>
        </div>

        <div className="flex-between">
          <div className="flex items-center gap-1">
            <Image
              src="/link.png"
              alt="link"
              width={16}
              height={16}
              className="object-contain size-4"
            />

            <Link
              href={"http://asedesign.netlify.app/"}
              className="text-blue-500 font-medium"
            >
              aseDesign
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/date.png"
              alt="date"
              width={16}
              height={16}
              className="object-contain size-4"
            />

            <span>Joined January, 2014</span>
          </div>
        </div>

        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>

        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
}

export default UserInfoCard;
