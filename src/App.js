
import React , { useState, useEffect } from 'react';
import './App.css';




const App = () => {

  var reload = 0;

  // console.log(reload);


  let [hours , sethours] = useState(0);
  let [minutes, setminutes] = useState(0);
  let [seconds , setseconds] = useState(0);

  let date = new Date();
  let _hours = date.getHours();
  let _minutes = date.getMinutes();
  let _seconds = date.getSeconds();

  
  const reloading = () => {
    console.log("useEffect executed");
    sethours(_hours);
    setminutes(_minutes);
    setseconds(_seconds);
  
  }

  
  useEffect(() => {
   let interval = setInterval(() => {
      reloading();
    }, 1000);
    return function cleanup(){
      clearInterval(interval)
    }

  });
  
  return (
    <>
    <div className="App">

      <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>


      </div>

      
    </div>
    </>
  );
}

export default App;
