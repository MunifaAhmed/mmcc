import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Divider, Segment, Grid } from 'semantic-ui-react';


const colors = [
  '#427aa1',
  '#194049',
  '#f7e11b',
  '#2d647f',
  '#c7c7c7'
]

class ChartBar extends Component {

  state = {
    datasets: [
      {
        label: 'Total Carbon Ditched',
        data: [1000, 306, 674, 123],
        backgroundColor: "#a5be00",
      }
      // {
      //    label: 'Mario',
      //    data:this.props.usersCarbonData.map(userCarbon => {
      //     return userCarbon.carbonDitched
      //    }).reduce((sum, data) => {
      //     return sum + data
      //    }, 0),
      // 	 backgroundColor: "rgba(225, 66, 50, 0.7)",

      // }
    ],
    datasList: []
  }

  componentDidMount = () => {
    const graphData = JSON.parse(localStorage.getItem('graphData'))
    if (graphData) {
      this.setState({
        datasList: graphData
      })
    }
  }

  updateData = () => {

    // this.setState({

    // }, ()=>{

    // })
    this.setState({
      datasList: this.state.datasets.concat({
        label: this.props.activeUser,
        data: this.props.usersCarbonData.map((userCarbon, index) => {
          if (index === 0) {
            return userCarbon.carbonDitched * 0.83
          } else if (index === 1) {
            return userCarbon.carbonDitched * 0.05
          } else if (index === 2) {
            return userCarbon.carbonDitched * 0.04
          } else {
            return userCarbon.carbonDitched * 0.07
          }
        }),
        backgroundColor: colors[Math.floor(Math.random() * colors.length - 1)],
      })
    }, () => {
      const graphData = { name: this.props.activeUser, barGraphData: this.state.datasList }
      localStorage.setItem('graphData', JSON.stringify(graphData))
    })
  }

  render() {

    const carbonDataSum = this.props.usersCarbonData.map(userCarbon => {
      return userCarbon.carbonDitched
    }).reduce((sum, data) => {
      return sum + data
    }, 0)


    const FP = Math.round(carbonDataSum * 0.83)
    const WSR = Math.round(carbonDataSum * 0.05)
    const FDT = Math.round(carbonDataSum * 0.04)
    const SCT = Math.round(carbonDataSum * 0.07)

    return (
      <div className='chart'>
        <div className='containerchart'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1} />
              <Grid.Column width={16}>
                <Segment id='contenthomechart' padded raised>
                  <Bargraph {...this.props} datasets={this.state.datasets} datasList={this.state.datasList} FP={FP} WSR={WSR} FDT={FDT} SCT={SCT} />
                </Segment>
                <Divider hidden />
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </Grid>
          <button className='toolsbutton' onClick={this.updateData} id='links' >Update</button>
        </div>
      </div>
    )
  }
}

const Bargraph = (props) => {

  const data = {
    labels: [
      `Food Production: ${props.FP}  `,
      `Whole Sale and retail: ${props.WSR} `,
      `Final delivery transport: ${props.FDT}`,
      `Supply chain transport: ${props.SCT}`
    ],
    datasets: props.datasList.barGraphData

  }

  const options = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
  return (

    <Bar data={data} options={options} />

  )
};

export default ChartBar;