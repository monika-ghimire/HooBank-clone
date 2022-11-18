import "./App.css";
import Ring  from './assest/ring.png'
import icon from "./assest/icon.svg";
import disicon from "./assest/disicon.png";
import Robot from "./assest/robot.png"
import Next from "./moreDetails/next"
// import Arrow from './assest/arrow.png'


function App() {
  return (
    <>
      <div className="App">
        <div className="container ContainerHolder">
          <div className="nav">
            <ul>
              <li>
                <img src={icon} alt="Your SVG" className="top-icon" />{" "}
                <span className="heading">
                  Hoo<span className="highLight">Bank</span>
                </span>
              </li>
              <li className="home details">Home</li>
              <li className="aboutUs details">AboutUs</li>
              <li className="Features details">Features</li>
              <li className="Solution details">Solution</li>
            </ul>
          </div>

          <div className="contentBody">
            <div className="row ">
              <div className="col-7 ">
                <div className="discountOffers ">

                  <span><img src={disicon} className="disIcon"/></span>
                  <span className="discout-title">20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                </div>
                <div className="getStarted">
                     <img src={Ring} alt="get started"/>
                     {/* <span><img src={Arrow}/></span> */}
                     <p className="getStartedtext">Get Started</p>
                </div>
                <div className="title">
               <p>The Next </p> 
                <span className="generation">Generation</span>
                <p className="titleEnd">Payment Method.</p>
                </div>
                <div className="explainShorts">
                  <p>
                  Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                  We examine annual percentage rates, annual fees.
                  </p>
                </div>
              </div>
              <div className="col-5">
                <div className="robotHand">
                  <img  src={Robot} alt="robot"/>
                </div>
              </div>
            </div>
            <div >
          <ul className="headFooter">
                <li  className="userActive">3800+</li>
                <li className="active">User Active</li>
                <li className="copmpanyActive">230+</li>
                <li className="copmpany">TRUSTED BY COMPANY</li>
                <li className="transactionActive">$230+</li>
                <li className="transaction">TRANSACTION</li>
              </ul>

            </div>
          </div>
          
          <div>
            <Next/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
