import React from 'react';
import ReactPlayer from'react-player';
import { useState } from 'react';
import './App.css';

const list ={
  10 : "https://www.youtube.com/watch?v=igQCv_Y33NI",
  2 : "https://www.youtube.com/watch?v=Z1QuBXVrUHU",
  3 : "https://www.youtube.com/watch?v=Pz-zjcmvsAI",
  4 : "https://www.youtube.com/watch?v=QQUBrXUAxSs",
  5 : "https://www.youtube.com/watch?v=-W30n_8yHxI",
  6 : "https://www.youtube.com/watch?v=tlKOtskkAlw",
  7 : "https://www.youtube.com/watch?v=c4JD7rEtIj8",
  8 : "https://www.youtube.com/watch?v=X4RFNTTUizY",
  9 : "https://www.youtube.com/watch?v=cd_XU_cW8To",
  1 : "https://www.youtube.com/watch?v=01vqerVBt2w"
}; 


function App() {
  let [count, setcount] = useState(1);
  function btnN(){
    if(count===Object.keys(list).length){
      setcount(1)
    }
    else{
      setcount(count +1);
    }
  }
  function btnP(){
    if(count===1){
      setcount(Object.keys(list).length)
    }
    else{
      setcount(count -1);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>DJ Anand Dholakpur Vaale</h1>
        <ReactPlayer url= {list[count]} controls={true} playing={true} // Enable default player controls
          width="90vw"
          height="60vh"/>

        <div className='butt'>
      <input class = 'bttn' id='Pre' type='button' value='Previous' onClick={btnP} ></input>
      <input class = 'bttn' id='Nex' type='button' value='Next' onClick={btnN} ></input>
      </div>

      </header>
    </div>
  );
}
export default App;
