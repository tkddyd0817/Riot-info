"use client";
import ChampionCard from "@/components/ChampionCard";
import ScrollToTopButton from "@/components/src/components/ScrollToTopButton";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/rotationApi";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../IsLoading";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

export default function RotationPage() {
  const { data, isPending } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    staleTime: 1000 * 60 * 5,
  });
  console.log(data);
  if (isPending) {
    return <IsLoading />;
  }
  // 데이터가 성공적으로 로드되었을 경우 구조 분해
  const { allPlayers, newPlayers } = data as RotationProps;

  return (
    <>
      <title>금주 로테이션 확인</title>
      <h2 className="text-3xl font-bold text-red-500">
        금주 플레이어 로테이션
      </h2>
      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <div>
          <div className=" text-2xl text-red-500 font-bold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} Champion={champion} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="txt pb-10">
            <h2 className="text-3xl font-bold text-red-500">
              금주 신규 플레이어 로테이션
            </h2>
          </div>

          <div className=" text-2xl text-red-500 font-bold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} Champion={champion} />
            ))}
          </div>
        </div>
        <ScrollToTopButton />
      </article>
    </>
  );
}
