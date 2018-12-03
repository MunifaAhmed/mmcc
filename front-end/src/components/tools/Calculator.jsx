import React, { Component } from 'react';
import { Divider, Segment, Grid } from 'semantic-ui-react';

class Calculator extends Component {
  render() {
    return (
      <div>
        <Divider hidden section />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={11}>
              <Segment id='contenthomeCal' padded raised>
                <h1 id='IC'>Instant Calculator</h1>
                <h3 id='ICsub'>The climate can change even by just ditching beef one day a week</h3>
                <div className='col sm' id='calculator'>
                  <form>
                    <div className="form-group">
                      <label for="sel1">What are you ordering?</label>
                      <select className="form-control" id="sel1" ref={self => this.meatSelect = self} onChange={e => this.props.orderChange(e.target.value)}>
                        <option></option>
                        <option value='humburger'>Hamburger</option>
                        <option value='steak'>Steak</option>
                        <option value='beef'>Beef, per serving</option>
                      </select>

                      <label for="sel1">How many you are ordering?</label>
                      <select className="form-control" id="sel1" ref={self => this.quantitySelect = self} onChange={e => this.props.numChange(e.target.value)}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>

                      <label for="sel1">Rate of your ordering per week?</label>
                      <select className="form-control" id="sel1" ref={self => this.perWeekSelect = self} onChange={e => this.props.rateChange(e.target.value)}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <button type='button' className='toolsbutton' onClick={(e) => this.props.updateResult(e, this.meatSelect.value, this.quantitySelect.value, this.perWeekSelect.value)} name='result'>Result Calculator</button>
                      <br />
                      {this.props.showMe ?
                        <div>
                          <h3 id='result'>According to Jamais Cascio research, the diet decision you will take will impact the mother earth by add {this.props.result} kg carbon. This is the amount of carbon released by burning {this.props.carbonCost} l of petrol. This is the price earth is paying to keep us everyday.</h3>
                        </div>
                        : null
                      }
                    </div>
                  </form>
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
}

export default Calculator;