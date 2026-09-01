export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface FeedPost {
  id: string;
  author: string;
  authorHandle: string;
  avatar: string;
  content: string;
  timeAgo: string;
  likes: number;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}
