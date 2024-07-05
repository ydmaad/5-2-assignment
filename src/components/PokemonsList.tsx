"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "../app/type";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/pokemons");
        setPokemonList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("에러가 났다네 => ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-4xl m-10 ">
        <h1>포켓몬 도감</h1>
      </div>

      <div>
        {pokemonList.map((mon) => {
          return (
            <Link href={`/detail/${mon.id}`} key={mon.id}>
              <button className="border-dashed border-2 m-3 p-4 border-black">
                <div>
                  <Image
                    src={mon.sprites.other.home.front_default}
                    alt={mon.korean_name}
                    width={110}
                    height={110}
                  />
                  <div>{mon.korean_name}</div>
                  <div>도감번호 : {mon.id}</div>
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
