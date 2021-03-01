import { gql, useQuery } from "@apollo/client";
import { nanoid } from "nanoid";
import React from "react";
import Player from "./Player";

export const GET_PLAYERS = gql`
  query getPlayers {
    headToHead {
      firstname
      lastname
      sex
      picture {
        url
      }
      country {
        code
        picture {
          url
        }
      }
      stats {
        rank
        points
        weight
        height
        age
        last
      }
    }
  }
`;

const Players = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS);
  if (loading) return "Loading…";
  if (error) return "Something went wrong…";
  return (
    <div className="mt-10 gap-8 grid grid-cols-1 sm:grid-cols-2">
      {data.headToHead.map((player) => (
        <Player key={nanoid()} {...player} />
      ))}
    </div>
  );
};

export default Players;
