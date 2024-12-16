import { useQuery } from "@tanstack/react-query";

const PANDASCORE_API = "https://api.pandascore.co/lol";

// We'll use PandaScore API for real esports data
const headers = {
  "Authorization": "Bearer " // Note: We need an API key to fetch real data
};

export interface Player {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  image_url: string;
  role: string;
  current_team: {
    name: string;
    image_url: string;
  };
  social_media_accounts: {
    name: string;
    url: string;
  }[];
}

export interface Match {
  id: number;
  name: string;
  begin_at: string;
  league: {
    name: string;
    image_url: string;
  };
  opponents: {
    opponent: {
      name: string;
      image_url: string;
    };
  }[];
  serie: {
    full_name: string;
  };
}

export const useTeamPlayers = () => {
  return useQuery({
    queryKey: ["team-players"],
    queryFn: async () => {
      // For now, return our static data since we don't have an API key
      return players;
    }
  });
};

export const useUpcomingMatches = () => {
  return useQuery({
    queryKey: ["upcoming-matches"],
    queryFn: async () => {
      // For now, return our static data since we don't have an API key
      return matches;
    }
  });
};

// Static data until we get API access
const players = [
  {
    id: 1,
    name: "113",
    first_name: "Andrei",
    last_name: "Dragomir",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/EXC_113_2024_Split_1.png",
    role: "Top Laner",
    current_team: {
      name: "Excel",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_Excel_Esportslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/113_lol"
      },
      {
        name: "twitch",
        url: "https://twitch.tv/113_lol"
      }
    ]
  },
  {
    id: 2,
    name: "Lucker",
    first_name: "Lucjan",
    last_name: "Krezel",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/EXC_Lucker_2024_Split_1.png",
    role: "Jungler",
    current_team: {
      name: "Excel",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_Excel_Esportslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/Lucker_lol"
      },
      {
        name: "twitch",
        url: "https://twitch.tv/lucker_lol"
      }
    ]
  },
  {
    id: 3,
    name: "LIDER",
    first_name: "Adam",
    last_name: "Maanane",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/EXC_LIDER_2024_Split_1.png",
    role: "Mid Laner",
    current_team: {
      name: "Excel",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_Excel_Esportslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/LIDER_lol"
      },
      {
        name: "twitch",
        url: "https://twitch.tv/lider_lol"
      }
    ]
  },
  {
    id: 4,
    name: "Patrik",
    first_name: "Patrick",
    last_name: "Hájek",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/EXC_Patrik_2024_Split_1.png",
    role: "Bot Laner",
    current_team: {
      name: "Excel",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_Excel_Esportslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/Patrik_lol"
      },
      {
        name: "twitch",
        url: "https://twitch.tv/patrik_lol"
      }
    ]
  },
  {
    id: 5,
    name: "Doss",
    first_name: "Mads",
    last_name: "Brock-Pedersen",
    image_url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5e/EXC_Doss_2024_Split_1.png",
    role: "Support",
    current_team: {
      name: "Excel",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_Excel_Esportslogo_square.png"
    },
    social_media_accounts: [
      {
        name: "twitter",
        url: "https://twitter.com/Doss_lol"
      },
      {
        name: "twitch",
        url: "https://twitch.tv/doss_lol"
      }
    ]
  }
];

const matches = [
  {
    id: 1,
    name: "G2 vs Excel",
    begin_at: "2024-03-23T17:00:00Z",
    league: {
      name: "LEC",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_LEC-01-FullonDark.png"
    },
    opponents: [
      {
        opponent: {
          name: "G2 Esports",
          image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2-FullonDark.png"
        }
      }
    ],
    serie: {
      full_name: "LEC Spring 2024 - Week 8"
    }
  },
  {
    id: 2,
    name: "Excel vs Fnatic",
    begin_at: "2024-03-24T21:00:00Z",
    league: {
      name: "LEC",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_LEC-01-FullonDark.png"
    },
    opponents: [
      {
        opponent: {
          name: "Fnatic",
          image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FFnatic-FullonDark.png"
        }
      }
    ],
    serie: {
      full_name: "LEC Spring 2024 - Week 8"
    }
  },
  {
    id: 3,
    name: "Excel vs MAD Lions",
    begin_at: "2024-03-30T17:00:00Z",
    league: {
      name: "LEC",
      image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2F1592594612171_LEC-01-FullonDark.png"
    },
    opponents: [
      {
        opponent: {
          name: "MAD Lions",
          image_url: "https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FMAD-Lions-FullonDark.png"
        }
      }
    ],
    serie: {
      full_name: "LEC Spring 2024 - Week 9"
    }
  }
];
