import React from "react";
import "./fourth.css";
import ringMain from "../../assest/ringMain.png";
import Scan from "../../assest/Scan.png";
import analysis from "../../assest/analysis.png";
import paypal from "../../assest/paypal.png";
import apple from "../../assest/apple.png";
import visa from "../../assest/visa.png";
import Shopify from "../../assest/Shopify.png";
export default function fourt() {
  return (
    <>
      <div className=" fourthHolder">
        <div className="row ">
          <div className="col-md-7">
            <div>
              <p className="title-fourth">
                Find a better card deal in few easy steps.
              </p>
              <p className="explainNote">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <button className="getStarted-btn">Get Started</button>
            </div>
          </div>

          <div className='col-md-5 leftScan-box'>
            <div className="ring-relative-al">
              <div className="ringOne">
              <img src={ringMain} alt='ring one ' className='ringOne' />
              </div>
            
            <div className='scanBox'>
              <img src={Scan} className='scan-icon' />
              <p className='scanheading'>
                Scan Credit Cards
              </p>
              <p className='scanTitle-dec'>
                Scan yourcredit card in 4 minutes.
              </p>
            </div>
            <div className='analysis'>
              <img src={analysis}  />
            </div>
            <div className='paymentMethod'>
                <p className='payment-method-heading'>Payment Method</p>
                <div className='payment-method-icons'>
                  <img src={paypal} alt='paypal' />
                  <img src={apple} alt='apple' />
                  <img src={visa} alt='visa' />
                  <img src={Shopify} alt='Shopify' />
                </div>

              </div>
            </div>
         
           
           
           
            
         
          
           
           
            
             
             

        
          </div>
        </div>
      </div>
    </>
  );
}







{/* <img src={ringOne} alt='ring one ' className='ringS'/>
            <img src={ringOne} alt='ring one ' className='ringT'/> */}