// SSR로 해보기

import { Pokemon } from "@/app/type";
import axios from "axios";
import Image from "next/image";

const PokemonDetail = async ({ id }: { id: string }) => {
  const response = await axios.get<Pokemon>(
    `http://localhost:3000/api/pokemons/${id}`,
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  console.log(response.data);

  const pokemon = response.data;
  // github template 테스트 한 번 해보자!!
  // const {weight,korean_name} = response.data
  // {
  //   id: response.data.id,
  //   name: response.data.korean_name,
  //   height: response.data.height,
  // weight: response.data.weight,
  // sprites: response.data.sprites.front_default,
  // types: response.data.type.name.korean_name,
  // abilities: response.data.ability.name.korean_name,
  // moves: response.data.move.name.korean_name,
  // };

  return (
    <>
      <div className="border-2 border-black border-dashed m-10 grid place-items-center w-[600px] p-5">
        <div>{pokemon.korean_name}</div>
        <div>NO. {pokemon.id}</div>

        <Image
          src={pokemon.sprites.other.showdown.front_default}
          alt={"포켓몬사진"}
          width={110}
          height={110}
        />
        <div>이름 : {pokemon.korean_name}</div>
        <div>
          키 : {pokemon.height}cm 무게 : {pokemon.weight}kg
        </div>
        <div className="flex space-x-7">
          <div className="flex space-x-4">
            <div>타입 :</div>
            {pokemon.types.map((ty) => {
              return (
                <div
                  className="bg-orange-500 w-10 flex items-center justify-center rounded-lg text-white"
                  key={ty.type.korean_name}
                >
                  {ty.type.korean_name}
                </div>
              );
            })}
          </div>
          <div className="flex space-x-4">
            <div>특성 :</div>
            {pokemon.abilities.map((abil) => {
              return (
                <div
                  className="bg-green-600 w-35 flex items-center justify-center rounded-lg text-white"
                  key={abil.ability.korean_name}
                >
                  {abil.ability.korean_name}
                </div>
              );
            })}
          </div>
        </div>

        <div>기술 :</div>

        <div className="flex flex-wrap items-center justify-center rounded-lg gap-4">
          {pokemon.moves.map((skill) => {
            return (
              <div
                className="bg-stone-200  flex items-center justify-center rounded-lg "
                key={skill.move.korean_name}
              >
                {skill.move.korean_name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
