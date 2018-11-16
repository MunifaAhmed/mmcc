import React from 'react';


const ThankYou = props => (
  <div>
    <div id='thankyou'>
    <h1>Thank you for your application. We will get back to you <span role= "img" aria-label="grinning face with smiling eyes"> 😁 {props.name}</span></h1>
    </div>
  </div>
)

export default ThankYou