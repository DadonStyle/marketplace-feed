import axios from 'axios'
import { useQuery } from 'react-query'

const usePostsFeed = (skip: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['feed', skip],
    queryFn: async () => {
      try {
        const Axios = axios.create({ baseURL: 'https://backend.tedooo.com' });
        const { data } = await Axios.get(`/hw/feed.json?skip=${skip}`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        });
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Sometging went wrong');
      }

    },
    retry: 0,
    refetchOnWindowFocus: false,
    retryDelay: 1000,
  });

  return { data, isLoading, error };
};

export default usePostsFeed