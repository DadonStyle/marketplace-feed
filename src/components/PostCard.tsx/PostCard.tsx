import { Card, CardActions, Typography, Link, Stack } from '@mui/material';
import FlexBox from '../BuildingBlocks/FlexBox/FlexBox';
import CircleImage from '../CircleImage/CircleImage';
import { FC } from 'react';
import { PostObject } from '../../types/types';
import { getRelativeTime } from '../../utils/utils';
import TransparentButton from '../Buttons/TransparentButton';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
// assets
import LikeCountIcon from '../../assets/icons/like-count-svg.svg?react';
import CommentIcon from '../../assets/icons/comment-buble-svg.svg?react';
import LikeButton from '../Buttons/LikeButton/LikeButton';

interface PostCardProps extends PostObject {}

const PostCard: FC<PostCardProps> = ({ ...props }) => {
  return (
    <Card sx={{ width: '100%', height: '100%', margin: '20px auto', boxShadow: 3 }}>
      <Stack padding="24px 24px 12px 24px" spacing={1}>
        <FlexBox justifyContent="flex-start" gap="12px">
          <CircleImage imgSrc={props.avatar} />
          <FlexBox flexDirection="column" alignItems="flex-start">
            <Typography variant="body1">{props.username}</Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', gap: '4px', color: (theme) => theme.palette.headingGray.main }}
            >
              <Link sx={{ color: (theme) => theme.palette.linkBlue.main, fontWeight: '500' }}>{props.shopName}</Link>
              <>• {getRelativeTime(props.date)}</>
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <Typography width="100%" variant="body2">
            {props.text}
          </Typography>
        </FlexBox>
      </Stack>
      <ImageCarousel images={props.images} />
      <Stack padding="12px 22px">
        <FlexBox justifyContent="space-between" sx={{ borderBottom: '1px solid #E0E0E0', padding: '12px 0' }}>
          <Typography
            display="flex"
            alignItems="center"
            gap="6px"
            variant="body2"
            sx={{ color: (theme) => theme.palette.lightGray.main }}
          >
            <LikeCountIcon /> {props.likes} Likes
          </Typography>
          <Typography
            display="flex"
            justifyContent="flex-end"
            variant="body2"
            sx={{ color: (theme) => theme.palette.lightGray.main }}
          >
            {props.comments} Comments
          </Typography>
        </FlexBox>
        <CardActions>
          <LikeButton />
          <TransparentButton handleOnClick={() => {}}>
            <CommentIcon />
            <Typography variant="body2">Comment</Typography>
          </TransparentButton>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default PostCard;
