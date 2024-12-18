import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      {/* <Image
        src="/HomeMain.jpg"
        alt="HomeMain"
        className="dark:invert"
        width={1500}
        height={1200}
        priority
      /> */}
      <ImageSlider />
    </div>
  );
}
