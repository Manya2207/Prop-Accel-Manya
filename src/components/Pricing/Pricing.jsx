import React, { useState } from "react";
import "./styles.css";
import PricingBg from "../../svg/PricingBg.svg";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="pricing" style={{ backgroundImage: `url(${PricingBg})` }}>
      <div className="wrapper">
        <div className="textdiv">
          <h1>Choose your plan</h1>
          <h3 className="boldsection5h1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </h3>
          <div className="sub-type">
            <span
              onClick={() => setIsMonthly((prev) => !prev)}
              className={isMonthly ? "sub-active" : null}
            >
              monthly
            </span>{" "}
            <span
              onClick={() => setIsMonthly((prev) => !prev)}
              className={isMonthly ? null : "sub-active"}
            >
              yearly
            </span>
          </div>
        </div>

        <div className="cards">
          {CardData.map((card, idx) => {
            return (
              <div
                className={
                  card.plan == "Premium"
                    ? "pricing-card premium"
                    : "pricing-card"
                }
              >
                <h5 className="card-title">{card.plan} Plan</h5>
                <p className="card-plan">{card.about}</p>
                <p className="card-fee">
                  {card.fee} <span className="card-fee-month">/month</span>
                </p>
                <ul className="card-perks">
                  {card.perks.map((perk, idx) => (
                    <li>{perk}</li>
                  ))}
                </ul>
                <button className="pricing-button">Start Free Trial</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const CardData = [
  {
    plan: "Basic",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    fee: "$ 54",
    perks: [
      "Free access to video class",
      "Free access to video class",
      "Free access to video class",
    ],
  },
  {
    plan: "Premium",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    fee: "$ 54",
    perks: [
      "Free access to video class",
      "Free access to video class",
      "Free access to video class",
    ],
  },
  {
    plan: "Basic",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    fee: "$ 54",
    perks: [
      "Free access to video class",
      "Free access to video class",
      "Free access to video class",
    ],
  },
];
