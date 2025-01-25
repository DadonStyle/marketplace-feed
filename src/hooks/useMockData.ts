import mock from '../api/mock.json';

export const useMockData = (skip: number) => {
  const hasMore = skip < mock.length;
  const currentData = mock.slice(0, skip);

  return { mock: currentData, hasMore };
};
