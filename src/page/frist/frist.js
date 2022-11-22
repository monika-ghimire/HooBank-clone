import React from "react";
import Ring from "../../assest/ring.png";
import icon from "../../assest/icon.svg";
import disicon from "../../assest/disicon.png";
import Robot from "../../assest/robot.png";
import arrow from "../../assest/arrow.png";
import overLayRobot from "../../assest/overLayRobot.png";
import './frist.css'
export default function frist() {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <ul>
                        <li>
                            <img src={icon} alt="Your SVG" className="top-icon" />{" "}
                            <span className="heading-start">
                                Hoo<span className="highLight">Bank</span>
                            </span>
                        </li>
                        <li className="home details">Home</li>
                        <li className="aboutUs details">About Us</li>
                        <li className="Features details">Features</li>
                        <li className="Solution details">Solution</li>
                    </ul>
                </div>

                <div className="contentBody">
                    <div className="row ">
                        <div className="col-7 ">
                            <div className="discountOffers">
                                <span>
                                    <img src={disicon} className="disIcon" />
                                </span>
                                <span className="discout-title">
                                    20% DISCOUNT FOR 1 MONTH ACCOUNT
                                </span>
                            </div>
                            <div className="getStarted">
                                <img src={Ring} alt="get started" />
                                <img src={arrow} alt="get started" className="arrow-icon" />
                                <p className="getStartedtext">Get Started</p>
                            </div>
                            <div className="maintitle">
                                <p>The Next </p>
                                <span className="generation">Generation</span>
                                <p className="titleEnd">Payment Method.</p>
                            </div>
                            <div className="explainShorts">
                                <p>
                                    Our team of experts uses a methodology to identify the credit
                                    cards most likely to fit your needs. We examine annual
                                    percentage rates, annual fees.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="robotHand">
                                <img src={Robot} alt="robot" className="robotHandimg" />
                                <div className="overLayRobot">
                                    <img src={overLayRobot} alt="hah" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="headFooter">
                            <li className="userActive">3800+</li>
                            <li className="active">User Active</li>
                            <li className="copmpanyActive">230+</li>
                            <li className="copmpany">TRUSTED BY COMPANY</li>
                            <li className="transactionActive">$230+</li>
                            <li className="transaction">TRANSACTION</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
