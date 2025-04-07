"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
    onClick={() => router.push('/')}
      alt="logo"
      className="hidden md:block cursor-pointer w-auto h-auto"
      width={100}
      height={50}
      src="/images/airbnby.png"
      priority
    />
  );
};

export default Logo;
