import axios from 'axios';
import { useQuery } from 'react-query';
import { PostObject } from '../types/types';

interface FeedQueryDTO {
  data: PostObject[];
  hasMore: boolean;
}

export const Axios = axios.create({ baseURL: 'https://backend.tedooo.com' });

const usePostsFeed = (skip: number) => {
  const { data, isLoading, error } = useQuery<FeedQueryDTO>({
    queryKey: ['feed', skip],
    queryFn: async () => {
      try {
        const res = await Axios.get(`/hw/feed.json?skip=${skip}`);
        return res?.data;
      } catch (error) {
        console.error(error);
        throw new Error('Something went wrong');
      }
    },
    retry: 0,
    refetchOnWindowFocus: false,
    retryDelay: 1000,
  });

  return { data, isLoading, error };
};

export default usePostsFeed;