import React from 'react'

class HandleEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  //   handleButton = (action, value) => () => {
  //     console.log(action)
  //     console.log(value)
  //   }

  handleButton(action, value) {
    console.log(action)
    console.log(value)
  }

  render() {
    return (
      <div>
        <button onClick={(action) => this.handleButton(action, 'add')}>Add</button>
        <button onClick={(action) => this.handleButton(action, 'delete')}>Delete</button>
        <button onClick={(action) => this.handleButton(action, 'update')}>Update</button>

        {/* <button onClick={this.handleButton('add')}>Add</button> */}
      </div>
    )
  }
}

export default HandleEvent
