import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  //   componentWillUnmount() {
  //     clearInterval(this.timer)
  //   }

  render() {
    return (
      <div>
        <h1>State in React</h1>
        <h2>Time is : {this.state.time} </h2>
      </div>
    )
  }
}

export default Clock
