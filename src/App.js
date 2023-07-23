
import './App.css';
import Train from "./Train.json";

import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
     
       <Lottie animationData={Train}/>
    </div>
  );
}

export default App;
