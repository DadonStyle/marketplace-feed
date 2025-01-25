import { useState } from 'react';
import { Menu, MenuItem, IconButton, useMediaQuery, Button, Stack } from '@mui/material';
import FlexBox from '../components/BuildingBlocks/FlexBox/FlexBox';
import Logo from '../assets/logo.svg?react';
import SearchBar from '../components/SearchBar/SearchBar';
import NavButton from '../components/Buttons/NavButton/Index';
import CircleImage from '../components/CircleImage/CircleImage';
import { useNavigate } from 'react-router-dom';
// assets
import HomeIcon from '../assets/icons/home-svg.svg?react';
import MessageCircleIcon from '../assets/icons/message-circle-svg.svg?react';
import BellIcon from '../assets/icons/bell-svg.svg?react';
import testImage1 from '../assets/test-img1.png';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width:800px)');

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <FlexBox
        sx={{
          background: (theme) => theme.palette.background.paper,
          height: '58px',
          width: '100%',
          padding: { sm: '0 10px', md: '0 80px', lg: '0 260px' },
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <FlexBox gap={1}>
          <Logo style={{ cursor: 'pointer' }} onClick={handleLogoClick} />
          <FlexBox>
            <SearchBar />
          </FlexBox>
        </FlexBox>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>
                <NavButton icon={<HomeIcon />} label="Home" path="/" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavButton icon={<MessageCircleIcon />} label="Messaging" path="/messaging" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavButton icon={<BellIcon />} label="Notifications" path="/notifications" />
              </MenuItem>
            </Menu>
          </>
        ) : (
          <FlexBox height="100%" gap={1}>
            <NavButton icon={<HomeIcon />} label="Home" path="/" />
            <NavButton icon={<MessageCircleIcon />} label="Messaging" path="/messaging" />
            <NavButton icon={<BellIcon />} label="Notifications" path="/notifications" />
            <CircleImage imgSrc={testImage1} />
          </FlexBox>
        )}
      </FlexBox>
    </header>
  );
};

export default Header;
