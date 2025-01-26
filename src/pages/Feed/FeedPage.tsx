import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import FlexBox from '../../components/BuildingBlocks/FlexBox/FlexBox';
import PostCard from '../../components/PostCard.tsx/PostCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostObject } from '../../types/types';

interface FeedPageProps {
  nextPosts: PostObject[];
  hasMore: boolean;
  handleNextRequest: () => void;
}

const FeedPage: FC<FeedPageProps> = ({ nextPosts, hasMore, handleNextRequest }) => {
  return (
    <Stack>
      <InfiniteScroll
        dataLength={nextPosts.length}
        next={handleNextRequest}
        hasMore={hasMore}
        loader={<FlexBox>Loading</FlexBox>}
      >
        {nextPosts?.map((post) => (
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

export default FeedPage;
