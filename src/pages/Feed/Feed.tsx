import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import FlexBox from '../../components/BuildingBlocks/FlexBox/FlexBox';
import PostCard from '../../components/PostCard.tsx/PostCard';
import { useMockData } from '../../hooks/useMockData';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useResetScrollerPosition } from '../../hooks/useResetScrollerPosition';
import usePostViewTracking from '../../hooks/usePostTrack';

const ITEMS_PER_PAGE = 6;

const Feed = () => {
  const [skip, setSkip] = useState<number>(ITEMS_PER_PAGE);
  const { mock, hasMore } = useMockData(skip);
  // const { data, isLoading } = usePostsFeed(skip); CORS issues, i'll create and use mock data instead
  usePostViewTracking(mock);
  useResetScrollerPosition();

  const handleNextRequest = () => {
    setSkip((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Stack>
      <InfiniteScroll
        dataLength={mock?.length}
        next={handleNextRequest}
        hasMore={hasMore}
        loader={<Typography variant="h2">Loading</Typography>}
      >
        {mock?.map((post) => (
          <FlexBox
            key={post.id}
            sx={{ padding: { sm: '0 10px', md: '0 80px', lg: '0 260px' } }}
            className="post"
            data-post-id={post.id}
          >
            <PostCard
              {...post}
              avatar={post.avatar}
              comments={post.comments}
              date={post.date}
              didLike={post.didLike}
              id={post.id}
            />
          </FlexBox>
        ))}
      </InfiniteScroll>
    </Stack>
  );
};

export default Feed;
