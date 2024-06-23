import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex-between h-16">
      <div className="md:hidden lg:block w-1/5">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          aseGram
        </Link>
      </div>

      <div className="hidden md:flex-between w-1/2 text-sm">
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

        <form className="hidden xl:flex items-center bg-slate-100 p-2 rounded-xl">
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search..."
          />
          <Image src={"/search.png"} alt="search" width={14} height={14} />
        </form>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={20} height={20} />
            </div>

            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages"
                width={20}
                height={20}
              />
            </div>

            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notifications"
                width={20}
                height={20}
              />
            </div>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <div className="cursor-pointer flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="login" width={20} height={20} />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
