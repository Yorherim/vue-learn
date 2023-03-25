export type Post = {
  id: number;
  title: string;
  description: string;
};

export type AppData = {
  likes: number;
  dislikes: number;
  posts: Post[];
};
