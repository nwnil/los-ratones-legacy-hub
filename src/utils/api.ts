import { useQuery } from "@tanstack/react-query";
import { players } from './playerData';
import { matches } from './matchData';
import type { Player, Match } from './types';

export const useTeamPlayers = () => {
  return useQuery({
    queryKey: ["team-players"],
    queryFn: async (): Promise<Player[]> => {
      return players;
    }
  });
};

export const useUpcomingMatches = () => {
  return useQuery({
    queryKey: ["upcoming-matches"],
    queryFn: async (): Promise<Match[]> => {
      return matches;
    }
  });
};

export type { Player, Match };