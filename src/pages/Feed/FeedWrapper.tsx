import React, { useState, useEffect } from 'react';
import FeedPage from './FeedPage';
import { PostObject } from '../../types/types';
import usePostsFeed from '../../api/usePostsFeed';
import { Typography } from '@mui/material';
import usePostViewTracking from '../../hooks/usePostTrack';

const ITEMS_PER_PAGE = 6;

const FeedWrapper = () => {
  const [skip, setSkip] = useState<number>(0);
  const [posts, setPosts] = useState<PostObject[]>([]);
  const { data, isLoading } = usePostsFeed(skip);
  usePostViewTracking(posts || []);

  const handleNextRequest = () => {
    setSkip((prev) => prev + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    if (data?.data) {
      setPosts((prevPosts) => [...prevPosts, ...data.data]);
    }
  }, [data]);

  if (isLoading && posts.length === 0) {
    return <Typography variant="h2">Loading</Typography>;
  }

  if (!isLoading && posts.length === 0) {
    return <Typography variant="h2">No posts available</Typography>;
  }

  return <FeedPage nextPosts={posts} hasMore={data?.hasMore || false} handleNextRequest={handleNextRequest} />;
};

export default FeedWrapper;
