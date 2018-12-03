import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Divider, Segment, Grid } from 'semantic-ui-react';

class ChartPie extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='chart'>
        <div >
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} />
              <Grid.Column width={11}>
                <Segment id='contenthomechart' padded raised>
                  <Piegraph {...this.props} />
                </Segment>
                <Divider hidden />
              </Grid.Column>
              <Grid.Column width={3} />
            </Grid.Row>
          </Grid>
        </div>
        <button className='toolsbutton' type='button' ><Link to='/tools/chartbar' id='links'>Result Report</Link></button>

      </div>
    )
  }
}

const Piegraph = (props) => {
  const data = {
    labels: [
      `Food Production: ${props.fpPercent} kg of Carbon`,
      `Whole Sale and retail: ${props.wsPercent} kg of Carbon`,
      `Final delivery transport: ${props.fdPercent}kg of Carbon`,
      `Supply chain transport: ${props.scPercent}kg of Carbon`
    ],
    datasets: [{
      label: "My First dataset",
      backgroundColor: [
        '#2d647f',
        '#d5c1b1',
        '#7fb7be',
        '#9dc9ac'
      ],
      borderColor: 'rgb(255, 99, 132)',
      data: [83, 5, 4, 7],
    }]
  }
  return (
    <div>
      <Pie data={data} />
    </div>
  )
};

export default ChartPie;
