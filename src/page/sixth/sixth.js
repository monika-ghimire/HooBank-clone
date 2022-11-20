import React from "react";
import "./sixth.css";
import mainIcon from "../../assest/mainIcon.png";
import endicons from '../../assest/endicons.png'
export default function sixth() {
  return (
    <>
      <div className="container">
        <div className="get-stated-six">
            <div className="paraHolder">
            <span>
            {" "}
            <button className="started-btn-six">Get stated</button>
          </span>
            <p className="heading-six">Let’s try our service now!</p>
          <p className="title-six">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
            </div>
          
         
        </div>

        <div className="row footer-six">
          <div className="col-4">
            <div>
              <img src={mainIcon} alt="mainIcon" className="mainIcon-six" />
              <p className="title-mainIcon">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
          </div>
          <div className="col-3  box-footer-six">
            <div>
              <p className="Heading-six-list">Usefull Links</p>
              <ul>
                <li>Content</li>
                <li>How it Works</li>
                <li>Created</li>
                <li>Explore</li>
                <li>Terms & Services</li>
              </ul>
            </div>
          </div>
          <div className="col-3 ">
            <p className="Heading-six-list">Community</p>
            <ul>
              <li>Help center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div className="col-2">
            <p className="Heading-six-list">Partner</p>
            <ul>
              <li>Our partner</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="content-end-six">
       
          <span>Copyright</span>
          <span className="spantwo">2021 HooBank. All Rights Reserved.</span>
          <div className="endicons-imgs">
            <img src={endicons} alt='endicons'/>
          </div>
        </div>
      </div>
    </>
  );
}
