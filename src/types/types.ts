export interface PostObject {
  avatar: string;
  comments: number;
  date: string;
  didLike: boolean;
  id: string;
  images: string[];
  likes: number;
  text: string;
  username: string;
  shopName?: string;
  premium?: boolean;
  shopId?: string;
  userId?: string;
}