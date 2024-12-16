import { Match } from './types';

export const matches: Match[] = [
  {
    id: 1,
    name: "Los Ratones vs GIANTX",
    begin_at: "2024-03-23T17:00:00Z",
    league: {
      name: "Superliga",
      image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/LVP_SL_2024_allmode.png"
    },
    opponents: [
      {
        opponent: {
          name: "GIANTX",
          image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f1/GIANTX_2024_allmode.png"
        }
      }
    ],
    serie: {
      full_name: "Superliga 2024 Spring - Week 9"
    }
  },
  {
    id: 2,
    name: "Los Ratones vs Movistar Riders",
    begin_at: "2024-03-24T21:00:00Z",
    league: {
      name: "Superliga",
      image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/LVP_SL_2024_allmode.png"
    },
    opponents: [
      {
        opponent: {
          name: "Movistar Riders",
          image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/47/Movistar_Riders_2024_allmode.png"
        }
      }
    ],
    serie: {
      full_name: "Superliga 2024 Spring - Week 9"
    }
  },
  {
    id: 3,
    name: "Los Ratones vs Barça eSports",
    begin_at: "2024-03-30T17:00:00Z",
    league: {
      name: "Superliga",
      image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/LVP_SL_2024_allmode.png"
    },
    opponents: [
      {
        opponent: {
          name: "Barça eSports",
          image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/07/Bar%C3%A7a_eSports_2024_allmode.png"
        }
      }
    ],
    serie: {
      full_name: "Superliga 2024 Spring - Week 10"
    }
  }
];