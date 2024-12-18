import Image from "next/image";
import React from "react";

const IsLoading = () => {
  return (
    <div>
      <h2 className="mx-auto text-2xl text-red-500 font-bold">
        로딩 중입니다.....
      </h2>
      <Image
        src="/LoadingImg.jpg"
        alt="LoadingImg"
        className="LoadingImg"
        width={1200}
        height={1500}
        priority
      />
    </div>
  );
};

export default IsLoading;
