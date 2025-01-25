import React, { useState } from 'react';
import { IconButton, CardMedia, Dialog, DialogContent } from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import FlexBox from '../BuildingBlocks/FlexBox/FlexBox';

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const showArrows = images.length > 2;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 2 ? prevIndex + 1 : 0));
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalPrev = () => {
    setModalIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const modalNext = () => {
    setModalIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  if (images.length === 0) return null;

  const visibleImages = images.length === 1 ? [images[0]] : images.slice(currentIndex, currentIndex + 2);
  const mainBackgroundColor = '#B8C248';

  return (
    <>
      <FlexBox
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: mainBackgroundColor,
        }}
      >
        {showArrows && (
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
          >
            <ArrowBack />
          </IconButton>
        )}
        <FlexBox
          sx={{
            gap: 2,
            overflow: 'hidden',
            width: '100%',
            justifyContent: images.length === 1 ? 'center' : 'space-between',
          }}
        >
          {visibleImages.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              image={image}
              alt={`Slide ${currentIndex + index + 1}`}
              onClick={() => openModal(currentIndex + index)}
              sx={{
                objectFit: 'contain',
                width: images.length === 1 ? '100%' : '50%',
                height: '517px',
                cursor: 'pointer',
              }}
            />
          ))}
        </FlexBox>
        {showArrows && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 0,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
          >
            <ArrowForward />
          </IconButton>
        )}
      </FlexBox>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        fullWidth
        maxWidth="md"
        sx={{ '& .MuiPaper-root': { backgroundColor: mainBackgroundColor } }}
      >
        <DialogContent sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            onClick={closeModal}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
          >
            <Close />
          </IconButton>
          <CardMedia
            component="img"
            image={images[modalIndex]}
            alt={`Image ${modalIndex + 1}`}
            sx={{
              objectFit: 'contain',
              width: '100%',
              height: '517px',
            }}
          />
          {images.length > 1 && (
            <>
              <IconButton
                onClick={modalPrev}
                sx={{
                  position: 'absolute',
                  left: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  },
                }}
              >
                <ArrowBack />
              </IconButton>
              <IconButton
                onClick={modalNext}
                sx={{
                  position: 'absolute',
                  right: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  },
                }}
              >
                <ArrowForward />
              </IconButton>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCarousel;
