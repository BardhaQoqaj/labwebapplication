import React from "react";
import './home.css';

function HomePage() {
  return (
  <div className="bg">

    <div className="home-container">
      
      <h1 className="plans">FIND ALL YOUR FAVORITE BOOKS HERE!</h1>
      <h4 className="goal">Our goal is for you to be closer to books than ever before</h4>

      <div className="box-1">
          <p><br/>taking into account the difficulties that arise due to the distance of the libraries</p>
          <p>we bring the library to your hand</p>
          <button><a href="#about">LEARN MORE ABOUT US!</a></button>
      </div>

      <h2 className="preparations">PREPARATIONS:</h2>
      <p className="steps">Steps you should follow</p>
      
      <div className="box-2">
        <ol>
          <a href="#box1"><li>Research!</li></a> 
          <a href="#box2"><li>Find the category you like the most</li></a>
          <a href="#box3"><li>Plan your free time to read !</li></a>
          <a href="#box4"><li>Start reading</li></a>
        </ol>
      </div>
      </div>

      <div className="box-3" id="box1">
        <div className="box-container">
          <h3 className="text">Read</h3>
          <p className="text">Exactly What We're Helping You With Right Now !<br/>
          By using our website you will see how useful it will be for your time and mind<br/>
          We're always here for you<br/>
          Need more help ?</p>
          <button>Contact Us</button>
        </div>

        <div className="box-container">
        <p className="text">What You Enjoy?</p>
        <p>You can find yourself in any of the many categories that our website has</p>
        <p>Get Started Right Now !</p>
        <button>Sign Up</button>
      </div>
      </div>

      

      {/* <div className="box-5">
        <p className="text">Get Started Right Now !</p>
        <button>SIGN UP</button>
      </div> */}
    </div>
  )
}

export default HomePage