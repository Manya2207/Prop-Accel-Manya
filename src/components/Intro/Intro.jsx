import React, { useState, useEffect } from "react";
import "./styles.css";
import CustomButtom from "../CustomButton/CustomButtom";
import Group75 from "../../svg/Group75.svg";
import Podcast from "../../images/Podcast.svg";
import Mic from "../../images/Mic.svg";
// import Podcast from "../../svg/Podcast.svg";
import ImageComponent from "./ImageComponent";

const Intro = () => {
  return (
    <div>
      <div className="section1">
        <div id="section1_part1">
          <div className="hiddenbackground">
            <img className="hiddenbackgroundimg" src="images/landing1.png" />
          </div>
          <div className="section1_content">
            <h1>Learn how to launch a successful podcast</h1>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </h3>

            <CustomButtom buttonName="Sign up Now" />
          </div>
        </div>
        <div id="section1_part2">
          <div
            className="intro-images"
            style={{
              backgroundImage: `url(${Group75})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <ImageComponent />
            <img
              src={Podcast}
              height={120}
              width={120}
              style={{
                right: "-55%",
                position: "relative",
                top: "-45%",
              }}
            />
            <img
              src={Mic}
              height={130}
              width={130}
              style={{
                right: "-25%",
                position: "relative",
                bottom: "-4s%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
