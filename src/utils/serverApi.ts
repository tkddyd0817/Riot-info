"use server";

import { Item } from "@/types/Item";
import {
  Champion,
  ChampionDetail,
  ChampionListResponse,
} from "@/types/Champion";
import { ChampionRotations } from "@/types/ChampionRotation";
const BaseAPI = "https://ddragon.leagueoflegends.com";

export async function fetchVersion(): Promise<String[]> {
  const response = await fetch(`${BaseAPI}/api/versions.json`);
  if (!response.ok) {
    throw new Error("버전 확인 실패하였습니다");
  }
  return response.json();
}

export async function fetchChampionLists(): Promise<Champion[]> {
  const version = await fetchVersion();
  const newVersion = version[0];

  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/champion.json`,
      {
        method: "GET",
      }
    );

    // 응답 상태 코드 확인
    if (!response.ok) {
      throw new Error(`에러가 발생했습니다 status: ${response.status}`);
    }

    const data = await response.json();
    const Champions: Champion[] = Object.values(data.data);

    return Champions; // 성공적으로 데이터를 반환
  } catch (error: any) {
    return error; // 에러 메시지를 포함한 객체 반환
  }
}

export async function fetchChampiondetails(
  id: string
): Promise<ChampionDetail> {
  const version = await fetchVersion();
  const newVersion = version[0];

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${newVersion}/data/ko_KR/champion/${id}.json`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("챔피언 정보 조회에 실패했습니다.");
  }
  console.log("response", response);
  const data: ChampionListResponse = await response.json();
  console.log(data); // 데이터 확인
  const Champions = data.data[id];
  //캐스팅 해준다??  타입캐스팅: 타입을 명확하게해준다
  return Champions;
}

export async function fetchItems(): Promise<Item[]> {
  const version = await fetchVersion();
  const newVersion = version[0];

  const response = await fetch(
    `${BaseAPI}/cdn/${newVersion}/data/ko_KR/item.json`,
    {
      method: "GET",
    }
  );
  console.log("response", response);
  // 응답 상태 코드 확인
  if (!response.ok) {
    throw new Error(`아이템 리스트 조회에 실패했습니다`);
  }

  const data = await response.json();
  console.log("data", data);
  const items: Item[] = Object.values(data.data);
  return items; // 성공적으로 데이터를 반환
}
