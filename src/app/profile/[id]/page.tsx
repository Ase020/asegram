import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import React from "react";

function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      {/* left */}
      <div className="hidden xl:block w-1/5 bg-blue-500">
        <LeftMenu type="profile" />
      </div>

      {/* center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
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
