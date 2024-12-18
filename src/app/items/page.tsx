// "use client";
import ScrollToTopButton from "@/components/src/components/ScrollToTopButton";
import { Item } from "@/types/Item";
import { fetchItems } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const ItemsPage = async () => {
  const version = "14.24.1";
  const items: Item[] = await fetchItems();

  return (
    <div>
      <h1 className="text-2xl text-red-500 font-bold">아이템 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className=" bg-black p-10 border border-gray   rounded-10 p-5 shadow hover:shadow-ig"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
            />
            <p className="text-2xl text-red-500 font-bold">이름:{item.name}</p>
            <p className="text-2xl text-red-500 font-bold">
              설명:{item.plaintext}
            </p>
            <p className="text-2xl text-red-500 font-bold">
              비용:{item.gold.base}
            </p>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ItemsPage;
