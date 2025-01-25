import { Box, BoxProps } from '@mui/material';

interface FlexBoxProps extends BoxProps {
  children?: React.ReactNode;
}

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...props }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" {...props}>
      {children}
    </Box>
  );
};

export default FlexBox;
