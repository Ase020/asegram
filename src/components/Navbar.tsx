import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex-between h-16">
      <div className="md:hidden lg:block w-1/5">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          aseGram
        </Link>
      </div>

      <div className="hidden md:flex w-1/2 text-sm">
        <div className="flex items-center gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="home"
              className="object-contain size-4"
              width={16}
              height={16}
            />
            <span className="">Homepage</span>
          </Link>

          <Link href={"/friends"} className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="friends"
              className="object-contain size-4"
              width={16}
              height={16}
            />
            <span className="">Friends</span>
          </Link>

          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="stories"
              className="object-contain size-4"
              width={16}
              height={16}
            />
            <span className="">Stories</span>
          </Link>
        </div>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
