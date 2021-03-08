export interface BlogState {
  article: {
    id: number;
    title: string;
    content: string;
    time: string;
  }[];
  newModalValue: {
    title: string;
    content: string;
  };
  count: number;
  alert: { isError: boolean; inputError: string; textareaError: string };
  number: number;
}
