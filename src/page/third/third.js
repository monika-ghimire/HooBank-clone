import React from 'react'
import './third.css'
import smallBox from '../../assest/smallBox.png'
import bigBox from '../../assest/bigBox.png'
import googlePlay from '../../assest/googlePlay.png'
import appStore from '../../assest/appStore.png'
import checkIcon from '../../assest/checkIcon.png'
export default function third() {
   return (
      <>
         <div className=' thirdHolder'>
            <div className='row '>
               <div className='col-7'>

                  <div className='boxes-holder'>
                  <div className=' last-tranction-box'>
                  <img src={smallBox} alt='hee' className='topBox' />
                        <img src={bigBox} alt='hee' className='bigBox' />
                        <span>
                        <div className='greatPaymentNoteHolder'>
                           <img src={checkIcon} alt='check icons' className='checkIcon' />
                           <span className='greatPaymentNoteHolder-title'>Great! Your Payment is succesfully.</span>
                        </div>
                     </span>
                     </div>
                     
                    
                    
                  </div>


               </div>
               <div className='col-5'>
                  <div className='titleHolder'>

                     <p className='headInUse'> Easily control your</p>
                     <p className='headInUse' >  billing & invoicing. </p>


                     <p className='InuseTitle'>
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
                        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                     </p>
                  </div>

                  <div className='app-content-holder'>
                     <img src={googlePlay} alt='hag' />
                     <img src={appStore} alt='hag' className='appStore' />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
