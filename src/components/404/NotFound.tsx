import FlexBox from '../BuildingBlocks/FlexBox/FlexBox';
import { Typography } from '@mui/material';

const NotFound = () => {
  return (
    <FlexBox height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Typography>Page not found</Typography>
    </FlexBox>
  );
};

export default NotFound;
