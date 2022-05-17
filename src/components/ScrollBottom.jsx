import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollBottom = () => {
  return (
    <img
      className="scrollToTopIcon"
      onClick={() => scroll.scrollToTop()}
      src="img/scroll.png"
    />
  );
};

export default ScrollBottom;
