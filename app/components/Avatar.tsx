"use client";

import Image from "next/image";

interface Avatarprops {
  src: string | null | undefined;
}

const Avatar:React.FC<Avatarprops> = ({src}) => {
  return (
    <Image
      className="rounded-full h-auto w-auto"
      height={30}
      width={30}
      alt="Avatar"
      src={src ||"/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
