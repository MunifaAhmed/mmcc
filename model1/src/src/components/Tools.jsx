import React, { Component } from 'react'

class Tools extends Component {
  state={
    order: '',
    num: '0',
    rate: '0',
    result:'',
    petrolPrice: '1.33',
    carbonCost: '0',
    name:''
  }

  weeksInYear = 52
  carbonPerLiter = 0.43

 orderChange=order=>{
   this.setState({
     order
   })
 }
 numChange=num=>{
   console.log(num)
  this.setState({
    num:Number(num)
  })
  }
  rateChange = rate => {
    this.setState({
      rate:Number(rate)
    })
  }
  updateResult= e =>{
    e.preventDefault()

  const meat = this.meatSelect.value
  const perWeek = this.perWeekSelect.value
  const quantity = this.quantitySelect.value
  
  let result = 0

  switch(meat) {
    case 'humburger':
      result = quantity * perWeek * this.weeksInYear * 3.7
      break;
    case 'steak':
      result = quantity * perWeek * this.weeksInYear * 3.5
      break;
    case 'beef':
      result = quantity * perWeek * this.weeksInYear * 3
      break;
    default:
      result = '0';
  }

  this.setState({
    result: result,
    carbonCost: this.carbonPerLiter * result
  })
  }

 render(){
   return(
        <div>
          <h1 id='IC'>Instant Calculator</h1>
          <h3>The climate can change even by just ditching beef one day a week</h3>
          <div className='col sm' id='calculator'>
          <form>
            <div class="form-group">
              <label for="sel1">What are you ordering?</label>
              <select class="form-control" id="sel1" ref={self => this.meatSelect = self} onChange={e=>this.orderChange(e.target.value)}>
                <option></option>
                <option value= 'humburger'>Humburger</option>
                <option value='steak'>Steak</option>
                <option value='beef'>Beef, per serving</option>
              </select>
  
              <label for="sel1">How many you are ordering?</label>
              <select class="form-control" id="sel1" ref={self => this.quantitySelect = self} onChange={e=>this.numChange(e.target.value)}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
             
              <label for="sel1">Rate of your ordering per week?</label>
              <select class="form-control" id="sel1" ref={self => this.perWeekSelect = self} onChange={e=>this.rateChange(e.target.value)}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
             <button type='button' onClick={this.updateResult} name='result'>Result</button>
             <h3 id='result'>According to Jamais Cascio research, the diet decision you will take will impact the mother earth by add {this.state.result} kg carbon. This is the amount of carbon released by burning {this.state.carbonCost} of petrol. This is the price earth is paying to keep us everyday.</h3>
             </div>
          </form>
          </div>
        </div>
   )
 }
}

export default Tools