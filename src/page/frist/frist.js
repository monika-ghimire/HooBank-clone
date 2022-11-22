import React from "react";
import Ring from "../../assest/ring.png";
import icon from "../../assest/icon.svg";
import disicon from "../../assest/disicon.png";
import Robot from "../../assest/robot.png";
import arrow from "../../assest/arrow.png";
import overLayRobot from "../../assest/overLayRobot.png";
import "./frist.css";
export default function frist() {
  return (
    <>
      <div className="containerHolder">
        <div className="row nav navHolder ">
          <div className="col-8 ">
            <div>
              <img src={icon} alt="Your SVG" className="top-icon" />{" "}
              <span className="heading-start">
                Hoo<span className="highLight">Bank</span>
              </span>
            </div>
          </div>
          <div className="col-1">
            <div className="home details">Home</div>
          </div>
          <div className="col-1">
            <div className="aboutUs details">About Us</div>
          </div>
          <div className="col-1">
            <div className="Features details">Features</div>
          </div>
          <div className="col-1">
            <div className="Solution details">Solution</div>
          </div>
        </div>

        <div className="contentBody">
          <div className="row ">
            <div className="col-7 rightContent ">
              
              <div className="getStarted">
              <img src={arrow} alt="get started" className="arrow-icon" />
                <p className="getStartedtext">Get Started</p>
                <img src={Ring} alt="get started" />
                
              </div>
              <div className="discountOffers">
                <span>
                  <img src={disicon} className="disIcon" />
                </span>
                <span className="discout-title">
                  20% DISCOUNT FOR 1 MONTH ACCOUNT
                </span>
              </div>
              <div className="maintitle">
                <span>The Next </span>
                <br/>
                <span className="generation">Generation</span>
                <br/>
                <span className="titleEnd">Payment Method.</span>
              </div>
              <div className="explainShorts">
                <p>
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs. We examine annual
                  percentage rates, annual fees.
                </p>
              </div>
            </div>
            <div className="col-5">
            {/* <div className="overLayRobot">
                <img src={overLayRobot} alt="hah" />
                </div> */}
              <div className="robotHand">
             
                <img src={Robot} alt="robot" className="robotHandimg" />
            
              </div>
            </div>
          </div>
          <div>
            <div  className=" row headFooter">
             <div className="col-4">
             <span className="userActive">3800+</span>
              <span className="active name">User Active</span>
             </div>
              <div className="col-4">
              <span className="copmpanyActive">230+</span>
              <span className="copmpany name">TRUSTED BY COMPANY</span>
              </div>
              <div className="col-4">
              <span className="transactionActive">$230+</span>
              <span className="transaction name">TRANSACTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
