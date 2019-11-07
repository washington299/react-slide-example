import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import favicon from '../images/favicon.jpg';
import game5 from '../images/game5.jpg';
import nagato from '../images/nagato_chave.jpg';

import './style.css';

function Slide () {
  return (
    <div className="slide">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div>
          <img src={favicon} />
          <div className="legend">
            <h1>legenda</h1>
          </div>
        </div>
        <div>
          <img src={game5} />
          <p className="legend">
            Legend 
          </p>
        </div>
        <div>
          <img src={nagato} />
          <p className="legend">
            Legend 
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slide;