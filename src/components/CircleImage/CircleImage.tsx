import { Box } from '@mui/material';
import { FC } from 'react';
import fallbackImg from '../../assets/fallback-img.jpg';
import FlexBox from '../BuildingBlocks/FlexBox/FlexBox';

interface CircleImageProps {
  imgSrc: string;
}

const CircleImage: FC<CircleImageProps> = ({ imgSrc }) => {
  // logic can be enlagring the image on click or link to a profile, currently out of scope
  return (
    <FlexBox>
      {imgSrc ? (
        <img style={{ borderRadius: '50%' }} height={40} width={40} src={imgSrc} alt="profile" />
      ) : (
        <img height={40} width={40} src={fallbackImg} alt="fallback" />
      )}
    </FlexBox>
  );
};

export default CircleImage;
