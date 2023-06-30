import React from "react";
import "./styles.css";
import CustomButtom from "../CustomButton/CustomButtom";
import Spaceship from "../../svg/Spaceship.svg";

const About = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${Spaceship})`,
      //   backgroundPosition: "right top",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="about-container"
    >
      <div className="section_left">
        <div className="section_left_boxes">
          <div className="srb-1">
            <div className="section_left_box ">
              <div className="textcontainer">
                <p>Interactive Features</p>
              </div>
              <div className="cardheading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </div>
            </div>
          </div>

          <div className="srb-1">
            {" "}
            <div className="section_left_box">
              <div className="textcontainer">
                <p>Interactive Features</p>
              </div>
              <div className="cardheading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </div>
            </div>
          </div>
        </div>
        <div className="section_left_boxes-2">
          <div className="srb-2">
            {" "}
            <div className="section_left_box">
              <div className="textcontainer">
                <p>Interactive Features</p>
              </div>
              <div className="cardheading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </div>
            </div>
          </div>

          <div className="srb-2">
            {" "}
            <div className="section_left_box">
              <div className="textcontainer">
                <p>Interactive Features</p>
              </div>
              <div className="cardheading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_right">
        <h1>About the Course</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unkno
          <br />
          <br />
          <br />
          <br />
          <CustomButtom buttonName="Explore Now" />
        </h3>
      </div>
    </div>
  );
};

export default About;
