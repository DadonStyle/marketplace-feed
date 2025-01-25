import { useState } from 'react';
import TransparentButton from '../TransparentButton';
import { Typography } from '@mui/material';
// assets
import LikeIcon from '../../../assets/icons/like-svg.svg?react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => setIsLiked((prev) => !prev);

  return (
    <TransparentButton handleOnClick={handleLikeClick} isActive={isLiked}>
      <LikeIcon />
      <Typography variant="body2">Like</Typography>
    </TransparentButton>
  );
};

export default LikeButton;
