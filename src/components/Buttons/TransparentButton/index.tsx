import { Button, styled, ButtonProps } from '@mui/material';
import { FC, ReactNode, useState } from 'react';

interface TransparentButtonProps extends ButtonProps {
  children: ReactNode;
  handleOnClick: () => void;
  isActive?: boolean;
}

const StyledTransparentButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  gap: '6px',
  backgroundColor: 'transparent',
  color: isActive ? theme.palette.linkBlue.main : theme.palette.lightGray.main,
  textTransform: 'none',
  '& svg': {
    stroke: isActive ? theme.palette.linkBlue.main : theme.palette.lightGray.main,
  },
  '&:hover': {
    color: theme.palette.linkBlue.main,
    '--variant-textBg': 'unset',
    '& svg': {
      stroke: theme.palette.linkBlue.main,
    },
  },
}));

const TransparentButton: FC<TransparentButtonProps> = ({ children, handleOnClick, ...props }) => {
  return (
    <StyledTransparentButton onClick={handleOnClick} {...props}>
      {children}
    </StyledTransparentButton>
  );
};

export default TransparentButton;
