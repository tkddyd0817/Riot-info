"use client";
import { useState, useEffect } from "react";
import { CSSProperties } from "react";

const images = [
  "/HomeMain.jpg", // 이미지 경로를 실제 이미지로 변경하세요
  "/HomeMain2.jpg",
  "/HomeMain3.jpg",
  "/HomeMain4.jpg",
  "/HomeMain5.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  return (
    <div style={styles.slider}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={styles.image}
      />
    </div>
  );
};

const styles: { slider: CSSProperties; image: CSSProperties } = {
  slider: {
    position: "relative",
    width: "100%",
    height: "850px", // 원하는 높이로 조정
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 이미지 비율 유지
  },
};
export default ImageSlider;
