import React from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import Lolla from "../../images/Lolla.png";
import Stars from "../../images/Stars.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-head">
        <h1>Review from customers</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        swipeable={true}
      >
        <div>
          <div className="myCarousel">
            <div className="carousel-head">
              <img className="lolla" src={Lolla} />
              <div>
                <h3>Lolla Smith</h3>
                <h4>Microsoft</h4>
                <img className="stars" src={Stars} />
              </div>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
        </div>
        <div>
          <div className="myCarousel">
            <div className="carousel-head">
              <img className="lolla" src={Lolla} />
              <div>
                <h3>Lolla Smith</h3>
                <h4>Microsoft</h4>
                <img className="stars" src={Stars} />
              </div>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
        </div>
        <div>
          <div className="myCarousel">
            <div className="carousel-head">
              <img className="lolla" src={Lolla} />
              <div>
                <h3>Lolla Smith</h3>
                <h4>Microsoft</h4>
                <img className="stars" src={Stars} />
              </div>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
