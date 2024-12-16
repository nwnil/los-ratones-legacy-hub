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