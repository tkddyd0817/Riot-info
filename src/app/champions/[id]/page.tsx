import { ChampionDetail } from "@/types/Champion";
import { fetchChampiondetails } from "@/utils/serverApi";
import { Metadata } from "next";

import React from "react";
import Detail from "./Detail";

interface ChampionDetailProps {
  params: {
    id: string;
  };
}
//동적인 메타데이터 를쓸떄는  generateMetadata
export async function generateMetadata({
  params,
}: ChampionDetailProps): Promise<Metadata> {
  const champion = await fetchChampiondetails(params.id);

  return {
    title: `${champion.name}- 이 페이지의 주인공!`,
  };
}

export default async function ChampionsDetailPage({
  params,
}: ChampionDetailProps) {
  const champion: ChampionDetail = await fetchChampiondetails(params.id);

  return (
    <div className="max-w-3xl mx-auto">
      <Detail champion={champion} />
    </div>
  );
}
