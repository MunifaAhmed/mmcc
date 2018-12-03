import React from 'react';
import { Divider, Segment, Grid } from 'semantic-ui-react'

const Home = (props) => {
  return (
    <div>
      <Divider hidden section />
      <div id='containerhome1'>

        <Grid>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={6}>
              <Segment id='contenthome' padded raised>
                <h1 id='homeheader' >MCC</h1>
                <div id='homep1'>
                  <div className='row'>
                    <div className='col'>
                      <p>Meat Carbon Calculator is a web application that primarily raises awareness of global warming by providing an instant carbon calculator for our meat consumption. With a couple of generic questions, the carbon calculator will estimate an annual average projection of potential emissions. </p>
                    </div>
                  </div>
                </div>
              </Segment>
              <Divider hidden />
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default Home