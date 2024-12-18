"use client";

import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";

export default function Detail({ champion }: { champion: ChampionDetail }) {
  return (
    <div className="  p-10     shadow hover:shadow-ig">
      <h2 className="text-red-500 text-2xl  font-bold ">{champion.name}</h2>
      <h2 className="text-gray-500 text-2xl  font-bold ">{champion.title}</h2>
      <div className="flex">
        <div className="flex flex-col justify-between gap-5 p-4 round shadow flex justify-center align-center hover:shadow-lg">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt={champion.name}
            className="Champion-List"
            width={600} // 원하는 너비
            height={100} // 원하는 높이
          />
          <p className="text-2xl text-red-500 font-bold">
            설명: {champion.lore}
          </p>
          <p className="text-2xl text-red-500 font-bold">
            공격력: {champion.info.attack}
          </p>
          <p className="text-2xl text-red-500 font-bold">
            방어력: {champion.info.defense}
          </p>
          <p className="text-2xl text-red-500 font-bold">
            마법력: {champion.info.magic}
          </p>
          <p className="text-2xl text-red-500 font-bold">
            난이도: {champion.info.difficulty}
          </p>
        </div>
      </div>
    </div>
  );
}
