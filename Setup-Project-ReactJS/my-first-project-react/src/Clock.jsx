import React from 'react'

const list = ['BMW', 'RR', 'Toyota']

const fetchAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString(),
      listCar: []
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
    const header = document.getElementById('header')
    console.log(header)
    console.log('Call API')

    fetchAPI().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        listCar: res
      }))
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const newList = ['Orange', 'Banana', 'Grape']

    // Chỉ cập nhật khi listCar khác về mặt giá trị
    if (JSON.stringify(prevState.listCar) !== JSON.stringify(newList)) {
      this.setState({
        listCar: newList
      })
    }
  }

  //   componentWillUnmount() {
  //     clearInterval(this.timer)
  //   }

  render() {
    console.log(this.state.listCar)

    return (
      <div>
        <h1 id='header'>State in React</h1>
        <h2>Time is : {this.state.time} </h2>
        <h2>List: {this.state.listCar}</h2>
      </div>
    )
  }
}

export default Clock
