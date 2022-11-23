import React from "react";
import "./five.css";
import pole from "../../assest/pole.png";
import userone from "../../assest/userone.png";
import usertwo from "../../assest/usertwo.png";
import userthr from "../../assest/userthr.png";
import dropbox from '../../assest/dropbox.png'
import binance from '../../assest/binance.png'
import coinbase from '../../assest/coinbase.png'
import airbnb from '../../assest/airbnb.png'

export default function five() {
  return (
    <>
      <div className=" fifth-content">
        <div className="row ">
          <div className="col-md-6">
            <p className="review-heading">What people are saying about us</p>
          </div>
          <div className="col-md-6">
            <p className="review-heading-title">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="row box-holder">
          <div className="col-md-4">
            <div className="box box-wapper">
              <img src={pole} alt="a" className="pole" />
              <p>
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <img src={userone} alt="userone images" className="userImgs" />
              <span className="user-name">Herman Jensen</span>
              <br/>
              <span className="user-postion">Founder & Leader</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <img src={pole} alt="a" className="pole" />
              <p>
                Money makes your life easier. If you're lucky to have it,
                you're lucky.
              </p>
              <img src={usertwo} alt="userone images" />
              <span className="user-name">Herman Jensen</span>
              <br/>
              <span className="user-postion">Founder & Leader</span>

            </div>
          </div>

          <div className="col-md-4">
            <div className="box">
              <img src={pole} alt="a" className="pole" />
              <p>
                It is usually people in the money business, finance, and
                international trade that are really rich.
              </p>
              <img src={userthr} alt="userone images" />
              <span className="user-name">Herman Jensen</span>
              <br/>
              <span className="user-postion">Founder & Leader</span>

            </div>
          </div>
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-md-3">
              <img src={airbnb} alt='images'/>
            </div>
            <div className="col-md-3">
            <img src={binance} alt='images'/>
            </div>
            <div className="col-md-3">
            <img src={coinbase} alt='images'/>
            </div>
            <div className="col-md-3">
            <img src={dropbox} alt='images'/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
