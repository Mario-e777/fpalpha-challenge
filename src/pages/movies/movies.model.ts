export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  created: string;
  edited: string;
  planets: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}
