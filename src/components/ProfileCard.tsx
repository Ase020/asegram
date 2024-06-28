import Image from "next/image";
import React from "react";

function ProfileCard() {
  return (
    <div className="card text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/19101643/pexels-photo-19101643/free-photo-of-dome-with-glass-ceiling.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/26646538/pexels-photo-26646538/free-photo-of-couple-marriage-day.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={48}
          height={48}
          className="object-cover rounded-full size-12 absolute left-0 right-0 -bottom-6 mx-auto ring-1 ring-white z-10"
        />
      </div>

      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Ruth Marshall</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <Image
                key={i}
                src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={16}
                height={16}
                className="rounded-full object-cover size-4"
              />
            ))}
          </div>

          <span className="text-xs text-gray-500">500 followers</span>
        </div>

        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
