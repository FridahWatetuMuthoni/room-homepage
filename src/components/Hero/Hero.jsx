import "./Hero.scss";
import data from "../../data";
import { useState } from "react";
import left_arrow from "../../assets/images/icon-angle-left.svg";
import rigth_arrow from "../../assets/images/icon-angle-right.svg";
import arrow from "../../assets/images/icon-arrow.svg";
import Navbar from "../Navbar/Navbar";

function Hero() {
  const [currentImage, setCurrentImage] = useState(1);

  const handlePrevious = () => {
    currentImage === 1
      ? setCurrentImage(data.length)
      : setCurrentImage(currentImage - 1);
  };
  const handleNext = () => {
    currentImage === data.length
      ? setCurrentImage(1)
      : setCurrentImage(currentImage + 1);
  };

  return (
    <section className="hero-wrapper">
      <section className="image-slider">
        <Navbar />
        {data.map((image) => {
          return (
            <img
              className={currentImage === image.id ? null : "hide-image"}
              key={image.id}
              src={image.image}
              alt="slider image"
            />
          );
        })}
        <section className="slider-indicators">
          <img src={left_arrow} onClick={handlePrevious} alt="left arrow" />
          <img src={rigth_arrow} onClick={handleNext} alt="right arrow" />
        </section>
      </section>
      <section className="hero-content">
        <h1> Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <section className="shop-btn">
          <p>Shop Now</p>
          <img src={arrow} alt="" />
        </section>
      </section>
    </section>
  );
}

export default Hero;
