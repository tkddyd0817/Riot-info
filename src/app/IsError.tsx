import Image from "next/image";
import React from "react";

const IsError = () => {
  return (
    <div>
      <h2>에러가 발생했습니다........</h2>
      <Image
        src="/ErrorImg.jpg"
        alt="ErrorImg.jpg"
        className="ErrorImg.jpg"
        width={1200}
        height={1500}
        priority
      />
    </div>
  );
};

export default IsError;
