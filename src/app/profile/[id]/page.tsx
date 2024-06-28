import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      {/* left */}
      <div className="hidden xl:block w-1/5">
        <LeftMenu type="profile" />
      </div>

      {/* center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex-center flex-col">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/16304003/pexels-photo-16304003/free-photo-of-woman-crouching-by-the-fence.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/26691060/pexels-photo-26691060/free-photo-of-woman-in-front-of-a-wall-of-locks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                height={128}
                width={128}
                className="object-cover size-32 rounded-full z-10 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>

            <h1 className="mt-20 mb-4 text-2xl font-medium">Cole Rodgers</h1>

            <div className="flex-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">15K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>

      {/* right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="userId" />
      </div>
    </div>
  );
}

export default ProfilePage;
