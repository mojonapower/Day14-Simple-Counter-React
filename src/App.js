/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';

const SimpleCounter = props => {
  const [count, setCount] = useState(Number(props.countStart));
  React.useEffect(() => {
    
    const timer = window.setInterval(() => {console.log(props.countStart); setCount(prevCount => prevCount + Number(props.mode)); }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  },[count])


  let stringTimer = count >= 0 ? count.toString() : "0";
  let digitos = {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0
  };

  switch (true) {
    case stringTimer.length === 1:
      digitos.d1 = stringTimer[0]
      break;
    case stringTimer.length === 2:
      digitos.d1 = stringTimer[1];
      digitos.d2 = stringTimer[0];
      break;
    case stringTimer.length === 3:
      digitos.d1 = stringTimer[2];
      digitos.d2 = stringTimer[1];
      digitos.d3 = stringTimer[0];
      break;

    case stringTimer.length === 4:
      digitos.d1 = stringTimer[3];
      digitos.d2 = stringTimer[2];
      digitos.d3 = stringTimer[1];
      digitos.d4 = stringTimer[0];
      break;

    case stringTimer.length === 5:
      digitos.d1 = stringTimer[4];
      digitos.d2 = stringTimer[3];
      digitos.d3 = stringTimer[2];
      digitos.d4 = stringTimer[1];
      digitos.d5 = stringTimer[0];
      break;
    case stringTimer.length === 6:
      digitos.d1 = stringTimer[5];
      digitos.d2 = stringTimer[4];
      digitos.d3 = stringTimer[3];
      digitos.d4 = stringTimer[2];
      digitos.d5 = stringTimer[1];
      digitos.d6 = stringTimer[0];
      break;
    default:
      digitos.d1 = 9;
      digitos.d2 = 9;
      digitos.d3 = 9;
      digitos.d4 = 9;
      digitos.d5 = 9;
      digitos.d6 = 9;
  };



  return (
    <div>
      <div className='clock-container'>
        <div className='clockImg flex-item'><i className="fa-regular fa-clock"></i></div>
        <div className='digito6 flex-item'>{digitos.d6}</div>
        <div className='digito5 flex-item'>{digitos.d5}</div>
        <div className='digito4 flex-item'>{digitos.d4}</div>
        <div className='digito3 flex-item'>{digitos.d3}</div>
        <div className='digito2 flex-item'>{digitos.d2}</div>
        <div className='digito1 flex-item'>{digitos.d1}</div>
      </div>



    </div>
  );
};



function App() {
  const [startParameters, setStartParameters] = useState({
    countStart: "0",
    mode: "1",
  });

 function startCountdown () {
   setStartParameters({
    countStart: "100",
    mode: "-1",
  });
 };


  return (

    <div>
      <SimpleCounter countStart={startParameters.countStart} mode={startParameters.mode}/>
      <input type='number' placeholder='Number to start countdown' id='countdownInput' />
      <button id='startCountdownButton' onClick={startCountdown}>Start Countdown</button>
    </div>
  )
};

export default App;
