import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {Array.from({ length: 10 }).map((story, i) => (
          <Story key={`${story}-${i}`} />
        ))}
      </div>
    </div>
  );
}

const Story = () => {
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      role="button"
    >
      <Image
        src="https://images.pexels.com/photos/25972587/pexels-photo-25972587/free-photo-of-smiling-woman-in-hat-sitting-on-boat.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt="story"
        width={80}
        height={80}
        className="size-20 rounded-full ring-2 object-cover"
      />
      <span className="font-medium">Nyalenda</span>
    </div>
  );
};
