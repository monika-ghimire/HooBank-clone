import "./App.css";
import icon from "./assest/icon.svg";
// import disicon "./assest/icon.png";

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
                  <span><img src=""/></span>
                  <span>20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
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
              <div className="col-5"></div>
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
          
        </div>
      </div>
    </>
  );
}

export default App;
