import React, { Component } from 'react'
import './App.css'
import { Switch, Link, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Tools from './components/Tools'
import ThankYou from './components/ThankYou'
import ContactUs from './components/ContactUs'
import { Grid, Segment, Menu} from 'semantic-ui-react'


class App extends Component {
  state={
    name:'',
    activeItem: 'home'
  }
  updateName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleItemClick =(e, {name}) => {this.setState({activeItem: name})}

  render() {
    let {activeItem} = this.state
    let style ={
      fontSize: '2em',
      fontWeight: 'bolder'

    }
    let homes = {
      marginLeft: '2em'
    }
    return (
      <div className="App">
      <div id='main'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={6}>
 
        <Menu  color='yellow' pointing secondary  style={style}>
          <Link to='/'><Menu.Item style={homes} name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Link to='/aboutus'><Menu.Item
            name='about us'
            active={activeItem === 'about us'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to='/tools'><Menu.Item
            name='tools'
            active={activeItem === 'tools'}
            onClick={this.handleItemClick}
          /></Link>
            <Link to='/contactus'><Menu.Item
            name='join us'
            active={activeItem === 'join us'}
            onClick={this.handleItemClick}
          /></Link>
        </Menu>

            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>


       {/* <nav>
        <ul >
          <li > <Link to='/'>Home</Link></li>
          <li ><Link to='/aboutus'>About Us</Link></li>
          <li ><Link to='/tools'>Tools</Link> </li>
          <li ><Link to='/contactus'>Join Us</Link></li>
        </ul>
        </nav> */}



      <Switch>
         <Route  path= '/' exact render= {(routerProps)=> <Home {...routerProps } />}/>
        <Route path= '/aboutus' component= {AboutUs}/>
        <Route path= '/tools' component= {Tools}/>
        <Route path= '/contactus' component= {ContactUs}/>
        <Route path= '/thankyou' render= {(routerProps)=> <ThankYou {...routerProps } updateName={this.updateName} name={this.state.name}/>}/>
      </Switch>
      </div>
      </div>
    );
  }
}





export default App;
