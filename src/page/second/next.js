import React from "react";
import "./next.css";
import Secured from '../../assest/Secured.png'
import send from '../../assest/send.png'
import Star from '../../assest/Star.png'
export default function next() {
  return (
    <>
      <div className="containerHolder-second">
        <div className=" row ">
            <div className="col-8">
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
            <div className="col-4 leftcontainer">
                <div  >
                    <span><img src={Star} alt="start" className="alIcon"/></span>
                    <span className="rewards">Rewards</span>
                    <p className="rewardExplain">
                    The best credit cards offer
                     some tantalizing combinations of promotions and prizes
                    </p>
                </div>
                <div className="SecuredIcon">
                   <span> <img src={Secured} alt="Secured" className="alIcon"/></span> 
                    <span className="rewards">100% Secured</span>
                    <p className="rewardExplain">We take proactive steps make 
                    sure your information and transactions are secure.</p>
                </div>
              
                <div className="send" >
                    <span><img  src={send} alt="send icon" className="alIcon"/></span>
                    <span className="rewards">Balance Transfer </span>
                    <p className="rewardExplain">
                    A balance transfer credit
                     card can save you a lot of money in interest charges
                    </p>
                </div>
            </div>
          
        </div>
      </div>
    </>
  );
}
