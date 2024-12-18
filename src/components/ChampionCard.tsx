import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Champion: Champion;
}

export default function ChampionCard({ Champion }: Props) {
  return (
    <div className="grid-cols-4 bg-black p-10 border border-gray border border-gray  rounded-10 p-5 shadow hover:shadow-ig">
      <Link
        className=" text-2xl font-bold text-red-500"
        href={`/champions/${Champion.id}`}
      >
        <div className="mr-500  bg-navy p-5 round rounded-10 shadow   hover:shadow-lg">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${Champion.id}_0.jpg`}
            alt={Champion.name}
            className="Champion-List"
            width={300} // 원하는 너비
            height={120} // 원하는 높이
          />
          <p>챔피언 이름: {Champion.name}</p>
          <p className="text-gray-500 text-2xl  font-bold ">
            설명: {Champion.title}
          </p>
          {/* <p>공격력: {Champion.info.attack}</p>
          <p>방어력: {Champion.info.defense}</p>
          <p>마법력: {Champion.info.magic}</p>
          <p>난이도: {Champion.info.difficulty}</p> */}
        </div>
      </Link>
    </div>
  );
}
