import { Button, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import FlexBox from '../../BuildingBlocks/FlexBox/FlexBox';
import { useNavigate } from 'react-router-dom';

const StyledNavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  gap: '6px',
  backgroundColor: 'none',
  color: isActive ? theme.palette.secondary.main : theme.palette.headingGray.main,
  borderBottom: isActive ? `2px solid ${theme.palette.secondary.main}` : 'none',
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
  isActive?: boolean;
}

const NavButton: FC<NavButtonProps> = ({ icon, label, path }) => {
  const navigate = useNavigate();
  const handleButtonNavigation = () => navigate(path);
  const handleIsSelected = () => window.location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <StyledNavButton isActive={handleIsSelected()} onClick={handleButtonNavigation}>
      <FlexBox>{icon}</FlexBox>
      <Typography variant="h3">{label}</Typography>
    </StyledNavButton>
  );
};

export default NavButton;
