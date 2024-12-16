import { Player } from './types';

export const players: Player[] = [
  {
    id: 1,
    name: "Irrelevant",
    first_name: "Joel",
    last_name: "Miro Scharoll",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/LOS_Irrelevant_2024_Split_1.png",
    role: "Top Laner",
    current_team: {
      name: "Los Ratones",
      image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/39/Los_Ratoneslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/Irrelevant_lol"
      },
      {
        name: "twitch",
        url: "https://www.twitch.tv/irrelevantlol"
      }
    ]
  }
];