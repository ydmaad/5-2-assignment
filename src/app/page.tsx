import React from "react";
import PokemonList from "../components/PokemonsList";
import PokemonDetail from "./detail/[id]/page";

const page = () => {
  return (
    <div>
      <PokemonList />
    </div>
  );
};

export default page;
