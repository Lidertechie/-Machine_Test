import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Style/Slider.css';
import Right from '../../assets/icon/right.svg';
import Left from '../../assets/icon/left.svg';

const slides = [
  { id: 1, img: 'https://fastly.picsum.photos/id/866/600/300.jpg?hmac=Zlb4VEJZKg8E6U7UZGt9Mq8Ly0cZsb8ZloMpw_5WB2M', caption: 'Welcome to the Country Explorer' },
  { id: 2, img: 'https://fastly.picsum.photos/id/924/600/300.jpg?grayscale&hmac=VtYNxlPPYBCW5THYsXM0FqH43ojJfDVNLgWvjBVotsc', caption: 'Filter Countries by Continent' },
  { id: 3, img: 'https://fastly.picsum.photos/id/11/600/300.jpg?hmac=4l-XKbQyHGtmS-e3YOAKdb8UnUapJgRdrERj0SbuB00', caption: 'Load More to Explore' },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIdx) => {
    setIndex(selectedIdx);
  };

  return (
    <div className="slider-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        nextIcon={<span aria-hidden="true" />}
        prevIcon={<span aria-hidden="true" />}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="carousel-item-no-padding">
            <img className="carousel-image" src={slide.img} alt={`Slide ${slide.id}`} />
            {/* <Carousel.Caption>
              <h5>{slide.caption}</h5>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="custom-navigation">
        <button 
          className="nav-arrow prev-arrow" 
          onClick={() => handleSelect((index - 1 + slides.length) % slides.length)}
        >
          <img src={Left} alt="Previous" className="arrow-icon" />
        </button>
        
        <div className="nav-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${index === idx ? 'active' : ''}`}
              onClick={() => handleSelect(idx)}
            />
          ))}
        </div>
        
        <button 
          className="nav-arrow next-arrow" 
          onClick={() => handleSelect((index + 1) % slides.length)}
        >
          <img src={Right} alt="Next" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Slider;