export interface BlogState {
  article: {
    id: number;
    title: string;
    content: string;
    time: string;
  }[];
  count: number;
}
