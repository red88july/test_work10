export interface GetNews {
  id: string;
  title: string;
  datetime: string;
  image: string | null;
}

export type ApiNews = Omit<GetNews, 'id'>

export interface NewsList {
  [id: string]: ApiNews;
}