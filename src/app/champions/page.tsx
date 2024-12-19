import React from "react";
import { fetchChampionLists } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";
import ScrollToTopButton from "@/components/src/components/ScrollToTopButton";

export const revalidate = 86400;

const ChampionsPage = async () => {
  const championDatas: Champion[] = await fetchChampionLists();
  const champions = Object.values(championDatas);
  return (
    <div>
      <h2 className="text-2xl text-red-500 font-bold mb-4">챔피언 목록</h2>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {champions.map((champion) => {
            return <ChampionCard Champion={champion} />;
          })}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ChampionsPage;












