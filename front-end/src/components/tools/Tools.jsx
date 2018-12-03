import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';
import ChartPie from './ChartPie';
import ChartBar from './ChartBar';
import LogIn from './login/LogIn';
import axios from 'axios';

class Tools extends Component {
  state = {
    order: '',
    num: '0',
    rate: '0',
    result: '',
    petrolPrice: '1.33',
    carbonCost: '0',
    name: '',
    fpPercent: '',
    wsPercent: '',
    fdPercent: '',
    scPercent: '',
    carbonDitched: 0,
    activeUser: '',
    userName: '',
    usersCarbonData: [],
    showMe: false,
    showME: false
  }

  weeksInYear = 52
  carbonPerLiter = 0.43

  orderChange = order => {
    this.setState({
      order
    })
  }

  numChange = num => {
    this.setState({
      num: Number(num)
    })
  }

  rateChange = rate => {
    this.setState({
      rate: Number(rate)
    })
  }


  updateResult = (e, meat, quantity, perWeek) => {
    e.preventDefault()

    let result = 0
    console.log(perWeek, meat)
    switch (meat) {
      case 'humburger':
        result = Math.round(quantity * perWeek * this.weeksInYear * 3.7)
        break;
      case 'steak':
        result = Math.round(quantity * perWeek * this.weeksInYear * 3.5)
        break;
      case 'beef':
        result = Math.round(quantity * perWeek * this.weeksInYear * 3)
        break;
      default:
        result = '0';
    }


    this.setState({
      result: result,
      carbonCost: Math.round(this.carbonPerLiter * result),
      fpPercent: Math.round(result * 0.83),
      wsPercent: Math.round(result * 0.05),
      fdPercent: Math.round(result * 0.04),
      scPercent: Math.round(result * 0.7),
      showMe: true
    })
    // , ()=> {
    //   this.props.history.push('/tools/chartbar')
    // })
    // console.log(this.state.fpPercent)
  }
  updateState = (name) => {
    this.setState({
      userName: name,


    })
  }

  updateUser = (e, activeName) => {
    e.preventDefault()
    console.log(activeName, 'me name')
    this.setState({
      activeUser: activeName,
      showME: true
    }, () => {
      axios
        .post('http://localhost:8080/data',
          {
            name: this.state.activeUser,
            carbonDitched: 0
          }
        )
        .then(user => {
          console.log(user)
        })
    })
  }

  updateCarbonDitched = () => {

    let results = 0
    if (this.state.order === 'humburger') {
      results = this.state.num * this.weeksInYear * 3.7
    } else if (this.state.order === 'steak') {
      results = this.state.num * this.weeksInYear * 3.5
    } else {
      return results = this.state.num * this.weeksInYear * 3.
    }

    this.setState({
      carbonDitched: results
    }, () => {
      axios
        .put('http://localhost:8080/data', {
          name: this.state.activeUser,
          carbonDitched: this.state.carbonDitched
        })
        .then(user => {
          console.log(user)
        })
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/data')
      .then(({ data }) => {
        // console.log(data)
        this.setState({
          usersCarbonData: data
        })
      })

  }


  render() {

    return (
      <div className='Links'>

        <Calculator {...this.state} orderChange={this.orderChange} numChange={this.numChange} rateChange={this.rateChange} updateResult={this.updateResult} />
        <Link to='/tools/login'><button className='toolsbutton' id='loginbutton'>Interested in knowing MORE! Click here</button></Link>
        <Switch>
          <Route path='/tools/chartpie' render={() => <ChartPie {...this.state} />} />
          <Route path='/tools/chartbar' render={() => {
            // console.log(this.state)
            return <ChartBar {...this.state} />
          }
          } />
          <Route path='/tools/login' render={() => <LogIn {...this.state}
            orderChange={this.orderChange}
            numChange={this.numChange}
            rateChange={this.rateChange}
            updateResult={this.updateResult}
            updateCarbonDitched={this.updateCarbonDitched}
            userName={this.state.userName}
            activeUser={this.state.activeUser}
            updateState={this.updateState}
            updateUser={this.updateUser} />} />
        </Switch>
      </div>
    )
  }
}

export default Tools;