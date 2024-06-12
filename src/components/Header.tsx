// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Hero from './Hero';

const images = [
    "./images/IISC1701324356.avif",
    "./images/IIT1701324264.jpg",
    "./images/Parul1702021296.avif",
  ];

const Header = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: -1 }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map((src, index) => (
            <div key={index} style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={src} alt={`carousel-${index}`} style={{ height: '100%' }} />
            </div>
          ))}
        </Carousel>
      </Box>
      <AppBar position="static" sx={{ background: 'rgba(0, 0, 0, 0.5)', boxShadow: 'none',height:"60vh" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ position: 'absolute', pointerEvents: 'none', left: 10, color: 'white' }} />
            <InputBase
              placeholder="Search…"
              sx={{
                color: 'inherit',
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 32px',
                  transition: 'width 0.3s',
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '4px',
                },
              }}
            />
          </Box>
          
         <Hero/>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
