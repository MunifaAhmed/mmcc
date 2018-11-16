import React from 'react';
import {Header, Divider, Segment, Grid, Button} from 'semantic-ui-react'

const Home = (props)=> {
  let buttONClick =()=> props.history.push('/aboutus')
  let buttoNClick =()=> props.history.push('/tools')
  let style= {
    margin:'1em'
  }
return(
     <div>
      <Divider hidden section />
     <div id='containerhome1'>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
      <Segment padded raised>
       <Header as='h1'> MCC</Header>
       <div id='homep1'>
       <p>Meal Meat Carbon Calculator is a web app that creates a network of green community that fight for greener earth. It raises awarness of global warming especially in agriclture sector and help individual calculate and create a reporting personalized accounts for there carbon footprint in regards to there regular consumption of meat product.</p>
       </div>
       </Segment>
       <Divider hidden />
           <Button size='large' style={style} inverted color='yellow' onClick={buttONClick} >Learn More ...</Button>
           <Button size='large' style={style} inverted color='yellow' aria-pressed="true" onClick={buttoNClick} >Try us ...</Button>
       </Grid.Column>
       <Grid.Column width={5} />
       </Grid.Row>
       </Grid>
       </div>

       </div>
)
}

export default Home