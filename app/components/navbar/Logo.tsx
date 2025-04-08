"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      {/* Mobile logo */}
      <Image
        onClick={() => router.push("/")}
        alt="Mobile Logo"
        className="block md:hidden cursor-pointer w-auto h-auto my-auto"
        width={30}
        height={30}
        src="/images/airbnbyNoText.png" // your mobile logo here
        priority
      />
      <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="hidden md:block cursor-pointer w-auto h-auto"
        width={100}
        height={50}
        src="/images/airbnby.png"
        priority
      />
    </>
  );
};

export default Logo;
