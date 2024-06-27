import React from "react";
import Image from "next/image";
import Link from "next/link";

function Birthdays() {
  return (
    <div className="card text-sm flex flex-col gap-4">
      <span className="text-gray-500 font-medium">Birthdays</span>

      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/26186220/pexels-photo-26186220/free-photo-of-a-man-standing-with-his-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full size-10"
          />
          <span className="font-semibold truncate">Nannie Christensen</span>
        </div>

        <div className="flex items-center justify-end gap-2.5">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>

      <div className="p-4 bg-slate-100 text-white rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="gift" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <h3 className="capitalize text-gray-700 font-semibold">
            Upcoming Birthdays
          </h3>
          <span className="text-gray-500">See other 16 upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays;
