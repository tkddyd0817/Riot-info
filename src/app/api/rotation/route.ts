import { NextResponse } from "next/server";
import { ChampionRotations } from "@/types/ChampionRotation";
const ApiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string; // API 환경변수
const BaseURL = "https://kr.api.riotgames.com/lol/platform/v3";

export async function GET(request: Request) {
  const res = await fetch(`${BaseURL}/champion-rotations`, {
    method: "GET",
    headers: {
      "X-Riot-Token": ApiKey,
    },
    next: {
      revalidate: 86400,
    },
  });
  if (!res.ok) {
    throw new Error(`에러가 발생했습니다  ${res.status}`);
  }

  const data: ChampionRotations[] = await res.json();

  return NextResponse.json(data);
}
