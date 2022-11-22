import "./App.css";
import Third from './page/third/third'
import Fourth from './page/fourth/fourth'
import Five from './page/five/five'
import Sixth from './page/sixth/sixth'
import Next from "./page/second/next"
import Frist from './page/frist/frist'

function App() {
  return (
    <>
      <div className="App">
        <div className=" ContainerHolder">
           <Frist/>
           <Next/>
           <Third/>
           <Fourth/>
           <Five/>
           <Sixth/>
           
        </div>
      </div>
    </>
  );
}

export default App;
