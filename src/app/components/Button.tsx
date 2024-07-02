"use client";

import React from "react";

interface MonProps {
  mon: {
    id: number;
    korean_name: string;
    sprites: {
      front_default: string;
    };
  };
}

const CardBtn = ({ mon }: MonProps) => {
  return (
    <>
      <button className="border-dashed border-2 border-indigo-600 m-2.5">
        <div key={mon.id}>
          <div>{mon.korean_name}</div>
          <img src={mon.sprites.front_default} alt={mon.korean_name} />
        </div>
      </button>
    </>
  );
};

export default CardBtn;
