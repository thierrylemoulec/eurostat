import ordinal from "ordinal";
import React from "react";
import FemaleSignIcon from "../assets/FemaleSignIcon";
import MaleSignIcon from "../assets/MaleSignIcon";
import Country from "./Country";

const PlayerStat = ({ label, value }) => (
  <div className="flex flex-col p-3 text-xs text-gray-500 items-center">
    <strong className="text-gray-700 text-base">{value}</strong>
    {label}
  </div>
);

const PlayerInfo = ({ label, value }) => (
  <div className="bg-gray-200 rounded-xl flex flex-col p-3 text-xs text-gray-500 items-center">
    <strong className="mb-1 text-sm text-gray-700">{value}</strong>
    {label}
  </div>
);

const Player = ({
  firstname,
  lastname,
  picture,
  country,
  sex,
  stats: { height, weight, age, last, rank, points },
}) => {
  // We could also use morphism https://github.com/nobrainr/morphism
  // Or if a "Unit" param could be passed to the graphql endpoint to transform height directly into m
  // Or we could useMemo to not calculate the value on each render
  const heightInMeters = height / 100;
  const weightInKg = weight / 1000;

  const wins = last.reduce((acc, game) => (game ? acc + 1 : acc), 0);
  const losses = last.length - wins; // because we have a boolean and no tie is possible

  return (
    <div className="bg-gray-50 rounded p-4 shadow relative">
      <Country {...country} />
      <h2 className="mb-6 text-gray-500 text-lg leading-tight">
        {firstname} <br />
        <strong className="font-extrabold text-gray-800 text-3xl">
          {lastname}
        </strong>
        <div className="text-gray-400 text-base">
          {sex === "MAN" ? <MaleSignIcon /> : <FemaleSignIcon />}
        </div>
      </h2>

      {picture?.url && (
        <img
          className="rounded-full h-16 object-cover top--4 right--4 w-16 absolute"
          src={picture.url}
          alt={`${firstname} ${lastname} profile`}
        />
      )}

      <div className="bg-gray-100 rounded-xl mb-6 py-2 px-6 shadow-sm gap-3 grid grid-cols-4">
        <PlayerStat label="Rank" value={ordinal(rank)} />
        <PlayerStat label="Points" value={points} />
        <div className="text-green-500">
          <PlayerStat label="Wins" value={wins} />
        </div>
        <PlayerStat label="Losses" value={losses} />
      </div>

      <div className="bg-gray-100 rounded-xl py-4 px-6 shadow-sm">
        <h3 className="font-bold mb-4 text-2xl text-gray-600">
          Physical Parameters
        </h3>
        <div className="gap-4 grid grid-cols-3">
          <PlayerInfo label="Weight" value={`${weightInKg}kg`} />
          <PlayerInfo label="Height" value={`${heightInMeters}m`} />
          <PlayerInfo label="Age" value={`${age}y.o`} />
        </div>
      </div>
    </div>
  );
};

export default Player;
