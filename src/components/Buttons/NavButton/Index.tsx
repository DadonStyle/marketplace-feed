import { Button, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import FlexBox from '../../BuildingBlocks/FlexBox/FlexBox';

const CustomButton = styled(Button)(({ theme }) => ({
  gap: '6px',
  backgroundColor: 'none',
  color: theme.palette.headingGray.main,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  height: '100%',
  borderRadius: 0,
  '& svg': {
    stroke: theme.palette.headingGray.main,
  },
  '&:hover': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    '& svg': {
      stroke: theme.palette.secondary.main,
    },
  },
}));

interface NavButtonProps {
  icon: ReactNode;
  label: string;
  path: string;
}

const NavButton: FC<NavButtonProps> = ({ icon, label, path }) => {
  const handleButtonNavigation = () => {
    // navigation logic using the path prop, currently out of scope
  };

  return (
    <CustomButton onClick={handleButtonNavigation}>
      <FlexBox>{icon}</FlexBox>
      <Typography variant="h3">{label}</Typography>
    </CustomButton>
  );
};

export default NavButton;
