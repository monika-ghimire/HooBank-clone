import React from "react";
import "./next.css";
import Secured from '../../assest/Secured.png'
import send from '../../assest/send.png'
import Star from '../../assest/Star.png'
export default function next() {
  return (
    <>
      <div className="container">
        <div className=" row containerHolder">
            <div className="col-7">
            <p className="titleTop">
            You do the business, we’ll handle the money.
          </p>

          <p className="shortWrite">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>

          <div>
            <button className="btnGetStarted">
                Get Started
            </button>
          </div>
            </div>
            <div className="col-5">
                <div >
                    <img src={Star} alt="start" className="starIcon"/>
                    <span className="rewards">Rewards</span>
                    <p className="rewardExplain">
                    The best credit cards offer
                     some tantalizing combinations of promotions and prizes
                    </p>
                </div>
                <div className="SecuredIcon">
                    <img src={Secured} alt="Secured" className="SecuredImg"/>
                    <p className="SecuredHeading">100% Secured</p>
                    <p className="SecuredNote">We take proactive steps make 
                    sure your information and transactions are secure.</p>
                </div>
                <div className="sendIcon">
                    <img src={send} alt="send icon" className="sendIconimg" />
                    <p className="sendTitle">Balance Transfer</p>
                    <p className="sendNote">A balance transfer credit
                     card can save you a lot of money in interest charges.</p>
                </div>
            </div>
          
        </div>
      </div>
    </>
  );
}
