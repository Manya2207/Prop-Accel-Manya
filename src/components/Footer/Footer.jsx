import React from "react";
import CustomButtom from "../CustomButton/CustomButtom";
import PolygonFooter from "../../svg/PolygonFooter.svg";
import "./styles.css";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${PolygonFooter})` }}
    >
      <h3 className="footer-heading">We have what you’re looking for</h3>
      <p className="footer-para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type a
      </p>
      <CustomButtom buttonName="Get Started Now" />

      <div className="footer-bottom">
        <p>All Right Reserved @Copyright 2023</p>
        <ul className="footer-list-1">
          {footerList1.map((item, idx) => (
            <a className="footer-link" href={item.link} target={"_blank"}>
              {item.item}{" "}
            </a>
          ))}
        </ul>
        <ul className="footer-list-2">
          {footerList2.map((item, idx) => (
            <a className="footer-link" href={item.link} target={"_blank"}>
              {item.item}{" "}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

const footerList1 = [
  {
    item: "Terms & Conditions",
    link: "/",
  },
  {
    item: "Privacy Policy",
    link: "/",
  },
  {
    item: "Product",
    link: "/",
  },
];

const footerList2 = [
  {
    item: <FaFacebook size={30} />,
    link: "/",
  },
  {
    item: <FaYoutube size={30} />,
    link: "/",
  },
  {
    item: <AiFillInstagram size={30} />,
    link: "/",
  },
  {
    item: <AiOutlineTwitter size={30} />,
    link: "/",
  },
];
