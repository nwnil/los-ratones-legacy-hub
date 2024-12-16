import teamData from '../data/teamData.json';

export const loadTeamData = () => {
  return teamData;
};

export const getPlayers = () => teamData.players;
export const getMatches = () => teamData.matches;
export const getAchievements = () => teamData.achievements;
export const getNews = () => teamData.news;
export const getMedia = () => teamData.media;