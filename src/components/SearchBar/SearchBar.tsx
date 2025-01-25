import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import SearchTextField from './SearchTextField/Index';
import FlexBox from '../BuildingBlocks/FlexBox/FlexBox';
// assets
import SearchIcon from '../../assets/icons/search-svg.svg?react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <FlexBox sx={{ width: '100%', height: '40px' }}>
      <SearchTextField
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        fullWidth
        placeholder="Search"
        sx={{ maxWidth: '600px' }}
        slotProps={{
          input: {
            style: { height: '40px' },
            startAdornment: (
              <InputAdornment position="start">
                <IconButton disableRipple onClick={handleSearch}>
                  <SearchIcon height={16} width={16} opacity={0.8} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </FlexBox>
  );
};

export default SearchBar;
