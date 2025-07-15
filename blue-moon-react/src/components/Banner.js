import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bannerUm from '../imagens/Banner01.jpg';
import bannerDois from '../imagens/banner.jpg';

function Banner() {
  return (
    <Carousel className="carrosel">
      <Carousel.Item>
        <img src={bannerUm} className="d-block w-100" alt="Banner 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerDois} className="d-block w-100" alt="Banner 2" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;