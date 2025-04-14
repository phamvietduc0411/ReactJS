import React, { Component } from 'react'

const fetchAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['a', 'b', 'c'])
    }, 1000)
  })
class CorrectlyState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comment: []
    }
  }
  //componentDidMount là 1 lifecycle method của react, nó sẽ được gọi sau khi component đã được render lần đầu tiên
  componentDidMount() {
    //setState nhận vào 1 hàm callback với tham số là state hiện tại và props hiện tại
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    fetchAPI().then((data) => {
      this.setState((prevState) => ({
        comment: data
      }))
    })
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <div>CorrectlyState : {this.state.count}</div>
        <div>Comment: {this.state.comment.join(', ')}</div>
      </div>
    )
  }
}

export default CorrectlyState
