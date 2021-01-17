import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactSlider from "../assets/React.jpg";
import AngularSlider from "../assets/Angular.jpg";
import VueSlider from "../assets/Vue.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 header-slider__img"
            src={ReactSlider}
            alt="slider-1"
          />
          <Carousel.Caption>
            <h3 className="slider-title">First Slider</h3>
            <p className="slider-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              beatae!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header-slider__img"
            src={AngularSlider}
            alt="slider-2"
          />
          <Carousel.Caption>
            <h3 className="slider-title">Second Slider</h3>
            <p className="slider-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              beatae!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header-slider__img"
            src={VueSlider}
            alt="slider-3"
          />
          <Carousel.Caption>
            <h3 className="slider-title">Third Slider</h3>
            <p className="slider-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              beatae!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
