import Image from "next/image";
import React from "react";

const IsLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h2 className="text-2xl text-red-500 font-bold mb-4">
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
