import React from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.default,
    width: '216px',
    borderRadius: '50px',
    padding: '0 6px',
    '& fieldset': {
      borderColor: theme.palette.background.default,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '& .MuiInputBase-input::placeholder': {
      opacity: 0.4,
    },
    '& .MuiInputAdornment-root': {
      margin: 0,
    },
  },
}));

const SearchTextField: React.FC<TextFieldProps> = (props) => {
  return <CustomTextField {...props} />;
};

export default SearchTextField;
