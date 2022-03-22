import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';



const SimpleCounter = (props) => {
  return (
    <div className='container'>
      <div className='clockImg flex-item'><i class="fa-regular fa-clock"></i></div>
      <div className='digito6 flex-item'>{props.d6}0</div>
      <div className='digito5 flex-item'>{props.d5}0</div>
      <div className='digito4 flex-item'>{props.d4}0</div>
      <div className='digito3 flex-item'>{props.d3}0</div>
      <div className='digito2 flex-item'>{props.d2}0</div>
      <div className='digito1 flex-item'>{props.d1}0</div>
    </div>
    )
}



ReactDOM.render(
    <React.StrictMode>
      <SimpleCounter />
    </React.StrictMode>,
    document.getElementById('root')
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
