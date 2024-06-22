"use client";

import Link from "next/link";
import React from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        role="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="h-[calc(100vh-64px)] w-full bg-white absolute top-16 left-0 flex-center flex-col gap-8 font-medium text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Login</Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
