import React from 'react';
import { Divider, Segment, Grid } from 'semantic-ui-react';


const JoinUs = (props) => {
  const submitForm = () => props.history.push('/thankyou')
  return (
    <div>
      <Divider hidden section />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={11}>
            <Segment id='contenthomechart' padded raised>

              <h1 id='JS'>Join Us</h1>
              <div className='row'>
                <div className='col'>
                  <form>
                    <div class="group">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Full Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" onChange={props.updateName} name='name' />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Phone No.</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="optional" />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Have green Ideas! Connect and lets Collarborate <span role="img" aria-label="slightly smiling face">🙂 </span></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                      </div>
                      <button className='toolsbutton' onClick={submitForm} id='links' >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </Segment>
            <Divider hidden />
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
      </Grid>
    </div>

  )
}

export default JoinUs
