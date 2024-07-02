"use client";

import { useEffect, useState } from "react";
import { Pokemon } from "./type";
import axios from "axios";
import CardBtn from "./components/Button";

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
      <div>1. route.ts파일에서 포켓몬 api를 어떻게 가져올 수 있을까 = 성공</div>
      <div>2. 이제는 이쁘게 리스트를 그려야되는데 어떻게 할 수 있을까</div>
      <div>2-1. 한국 이름 불러오기 = 성공</div>
      <div>2-2. 몬스터 이미지 불러오기 = 성공</div>
      <div>2-3. 이쁘게 만들기</div>

      <h1>포켓몬 리스트!!</h1>

      <div>
        {pokemonList.map((mon) => {
          return <CardBtn mon={mon} />;
        })}
      </div>
    </>
  );
}
