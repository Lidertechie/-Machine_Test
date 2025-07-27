
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Style/Slider.css'
const slides = [
  { id: 1, img: 'https://placehold.co/800x300?text=Slide+1', caption: 'Welcome to the Country Explorer' },
  { id: 2, img: 'https://placehold.co/800x300?text=Slide+2', caption: 'Filter Countries by Continent' },
  { id: 3, img: 'https://placehold.co/800x300?text=Slide+3', caption: 'Load More to Explore' },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIdx) => {
    setIndex(selectedIdx);
  };

  return (
<Carousel
  activeIndex={index}
  onSelect={handleSelect}
  nextIcon={<span className="custom-arrow">{'>'}</span>}
  prevIcon={<span className="custom-arrow">{'<'}</span>}
>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img className="d-block w-100" src={slide.img} alt={`Slide ${slide.id}`} />
          <Carousel.Caption>
            <h5>{slide.caption}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
