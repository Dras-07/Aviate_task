import React from 'react'
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img src="https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_960_720.jpg" className="image" alt="Girl in a jacket" width="400" height="300" />
        <div className="home-content">
        <div className="text1">Hello,we are </div>
        <div className="text2">CryptoPunk</div>
        <div className="text3">Know everything about <span className="span">Crypto</span>.</div>
        </div>
        <div className="button-box">
        <button type="button" className="button1">Sign up</button>
        <button type="button" className="button2">Sign in</button>
        </div>

      
  </div>
  )
}

export default Home;