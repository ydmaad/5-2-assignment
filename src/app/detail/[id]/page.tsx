import PokemonDetail from "@/components/PokemonDetail";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <PokemonDetail id={params.id} />;
};

export default page;
