import React from 'react'
import './feature.css'
function Cards(props) {
  return (

         <div className="card">
          <img src={props.img} alt={"apple"} />
          <div className="card-body">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{props.author}</h5>
          </div>
        </div>
  )
}

export default Cards
