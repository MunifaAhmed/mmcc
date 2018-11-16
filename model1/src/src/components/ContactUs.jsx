import React from 'react';


const ContactUs = (props)=> {
  const submitForm = () => props.history.push('/thankyou')
  return( 
       <div>
          <h1 id='JS'>Join Us</h1>
             <form>
               <div class="group">
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" onChange={props.updateName} name='name'/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Phone No.</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="optional"/>
                </div>
              
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Have green Ideas! Connect and lets Collarborate <span role= "img" aria-label="slightly smiling face">🙂 </span></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button onClick={submitForm}>Submit</button>
              </div>
            </form>
            </div>
            
  )
}

export default ContactUs
