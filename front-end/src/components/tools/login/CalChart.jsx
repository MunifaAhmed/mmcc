import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CalChart extends Component {

  render() {
    return (
      <div>
        <h1 id='IC'>Personalized Calculator</h1>
        <div className='container'>
          <div className='row'>
            <div className='col' id='calchart' >
              <form>
                <h3>Now, after knowing,calculating and seeing your impact on environment as individual. How much beef could you ditch per week?</h3>
                <div class="form-group">
                  <label for="sel1">What can you ditch?</label>
                  <select class="form-control" id="sel1" ref={self => this.meatSelection = self} onChange={e => this.props.orderChange(e.target.value)}>
                    <option></option>
                    <option value='humburger'>Hamburger</option>
                    <option value='steak'>Steak</option>
                    <option value='beef'>Beef</option>
                  </select>

                  <label for="sel1">How many times per week?</label>
                  <select class="form-control" id="sel1" ref={self => this.quantitySelection = self} onChange={e => this.props.numChange(e.target.value)}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </form>
              <button className='toolsbutton' onClick={this.props.updateCarbonDitched} id='links'>Save</button>
             </div>
            <div className='col' id='calchart'>
              <h3> Here, let us see how is your informed and improved green decision has lesser impact on environment</h3>
              <form>
                <div class="form-group">
                  <label for="sel1">What are you ordering?</label>
                  <select class="form-control" id="sel1" ref={self => this.meatSelect = self} onChange={e => this.props.orderChange(e.target.value)}>
                    <option></option>
                    <option value='humburger'>Hamburger</option>
                    <option value='steak'>Steak</option>
                    <option value='beef'>Beef, per serving</option>
                  </select>

                  <label for="sel1">How many you are ordering?</label>
                  <select class="form-control" id="sel1" ref={self => this.quantitySelect = self} onChange={e => this.props.numChange(e.target.value)}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>

                  <label for="sel1">Rate of your ordering per week?</label>
                  <select class="form-control" id="sel1" ref={self => this.perWeekSelect = self} onChange={e => this.props.rateChange(e.target.value)}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </form>
              <button type='button' className='toolsbutton' onClick={(e) => this.props.updateResult(e, this.meatSelect.value, this.quantitySelect.value, this.perWeekSelect.value)} name='result'><Link to='/tools/chartpie' id='links'>Result Calculator</Link></button>

            </div>
          </div>

          <br />

        </div>

      </div>
    )
  }
}

export default CalChart;
