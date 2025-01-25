import { Stack } from '@mui/material';
import FlexBox from '../../components/BuildingBlocks/FlexBox/FlexBox';
import PostCard from '../../components/PostCard.tsx/PostCard';
import usePostsFeed from '../../api/usePostsFeed';
import mock from '../../api/mock.json';
import { PostObject } from '../../types/types';

const Feed = () => {
  // CORS issues, i'll use the mock data instead;
  // const { data, isLoading } = usePostsFeed(6);

  console.log(mock as PostObject[]);

  return (
    <Stack>
      {mock?.map((post) => (
        <FlexBox key={post.id} sx={{ padding: { sm: '0 10px', md: '0 80px', lg: '0 260px' } }}>
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
    </Stack>
  );
};

export default Feed;
