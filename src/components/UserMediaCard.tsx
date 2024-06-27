import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className="card text-sm flex flex-col gap-4">
      <div className="flex-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/profile/ase" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex gap-4 justify-between flex-wrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="relative w-1/5 h-24" key={i}>
            <Image
              src="https://images.pexels.com/photos/25019973/pexels-photo-25019973/free-photo-of-close-up-portrait-of-a-woman-in-a-black-top.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserMediaCard;
