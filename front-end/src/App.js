import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Tools from './components/tools/Tools';
import JoinUs from './components/JoinUs';
import ThankYou from './components/ThankYou';


class App extends Component {
  state = {
    name: '',
    activeItem: 'home'
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }) }

  render() {
    return (
      <div className="App">
        <div id='main'>
         <nav>
            <ul >
              <li > <Link to='/' id='links'>Home</Link></li>
              <li ><Link to='/aboutus' id='links' >About Us</Link></li>
              <li ><Link to='/tools' id='links' >Tools</Link> </li>
              <li ><Link to='/joinus' id='links' >Join Us</Link></li>
            </ul>
        </nav>

          <Switch>
            <Route path='/' exact render={(routerProps) => <Home {...routerProps} />} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/tools' component={Tools} />
            <Route path='/joinus' component={JoinUs} />
            <Route path='/thankyou' render={(routerProps) => <ThankYou {...routerProps} updateName={this.updateName} name={this.state.name} />} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
