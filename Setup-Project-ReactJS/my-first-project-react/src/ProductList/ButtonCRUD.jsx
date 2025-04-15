import React, { Component } from 'react'

export class ButtonCRUD extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}

export default ButtonCRUD
