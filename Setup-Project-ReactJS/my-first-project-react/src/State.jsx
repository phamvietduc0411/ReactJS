import React, { Component } from 'react'

const fetchAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(['A', 'B']), 1000)
  })

export class State extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')

    this.state = {
      count: 0,
      comment: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetchAPI().then((res) => {
      this.setState((prevState) => ({
        comment: res
      }))
    })
    // this.setState((prevState) => ({
    //   count: prevState.count + 1
    // }))
  }

  render() {
    console.log('render')
    console.log(this.state)

    return <div>State . Count {this.state.count}</div>
  }
}

export default State
