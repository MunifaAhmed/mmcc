import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CalChart from './CalChart';

class LogIn extends Component {

  render() {
    return (
      <div>
        <form action="/login" method="post">
          <div>
            <div className='row'>
              <div className='col'>
                <label>Your Kind Name:</label>
                <input type="text" value={this.props.userName} onChange={(e) => this.props.updateState(e.target.value)} />
                <button type='button' className='toolsbutton' onClick={(e) => this.props.updateUser(e, this.props.userName)}><Link to='/tools/login/calchart' id='links' >Register</Link></button>
                {this.props.showME ?
                  <p>Welcome {this.props.activeUser} 😄</p> : null
                }
              </div>
              <div>


              </div>
            </div>
          </div>
        </form>
        <Switch>
          <Route path='/tools/login/calchart' render={() => <CalChart  {...this.state} orderChange={this.props.orderChange} numChange={this.props.numChange} rateChange={this.props.rateChange} updateResult={this.props.updateResult} updateCarbonDitched={this.props.updateCarbonDitched} />} />
        </Switch>
      </div>
    )
  }
}

export default LogIn;