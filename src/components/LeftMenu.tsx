import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import { linksData } from "@/constants/data";
import Advert from "./Advert";

interface LeftMenuProps {
  type: "home" | "profile";
}

function LeftMenu({ type }: LeftMenuProps) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="card text-sm text-gray-500 flex flex-col gap-2">
        {linksData.map(({ id, link, title, src }) => (
          <LinkTag key={id} link={link} title={title} src={src} />
        ))}
      </div>

      <Advert size="sm" />
    </div>
  );
}

const LinkTag = ({
  link,
  title,
  src,
}: {
  link: string;
  title: string;
  src: string;
}) => {
  return (
    <>
      <Link
        href={link}
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image
          src={src}
          alt={title}
          width={20}
          height={20}
          className="size-5 object-cover"
        />
        <span className="capitalize">{title}</span>
      </Link>
      <hr className="border-t-1 border-gray-50 w-36 self-center" />
    </>
  );
};

export default LeftMenu;
