import React, { useState } from 'react';
import { Container, Row, Col , Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
const items = [
  {
    src: '/images/environment-banner1.png',
    altText: 'Slide 1',
    caption: 'Our mission is to reduce waste and its impact on the environment through a community led movement.',
    key: 1,
  },
  {
    src: '/images/environment-banner2.png',
    altText: 'Slide 2',
    header: 'LOVE WHERE YOU LIVE',
    caption: 'Walk with us on the road to change, NO PLASTICS. NO LITTER. THANT MYANMAR.',
    key: 2,
  },
  {
    src: '/images/environment-banner3.png',
    altText: 'Slide 3',
    header: 'TAKE ACTION',
    caption: 'Against Single Use Plastics',
    key: 3,
  },
];

const Hero = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-100"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.header}
        />
      </CarouselItem>
    );
  });
  return (
    <section className="section position-relative"> 
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel> 
    </section>
  );
}

export default Hero;