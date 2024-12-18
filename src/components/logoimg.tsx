import Image from "next/image";
import React from "react";

export const Logoimg = () => {
  return (
    <Image
      src="/MainLogo.jpg"
      alt="MainLogo"
      className="MainLogo border border-gray  rounded-10"
      width={150}
      height={150}
      priority
    />
  );
};

export default Logoimg;
