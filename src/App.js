
import './App.css';
import icon from './assest/icon.svg'
function App() {
  return (
    <>
   
    <div className="App">
      <div className='container ContainerHolder'>
        <div className='nav'>
         <ul>
            <li>
              <img src={icon} alt="Your SVG" className='top-icon'/> <span className='heading'>HooBank</span>
            </li>
            <li className='home details'>Home</li>
             <li className='aboutUs details'>About Us</li> 
            <li className='Features details'>Features</li>
            <li className='Solution details'>Solution</li>
         </ul>
           
          
        </div>
   

         </div>
    </div>
    </>
  );
}

export default App;
