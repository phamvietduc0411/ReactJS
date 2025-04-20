import React, { Component } from 'react'


 class Button extends Component {

  handleClick = (event) => {
      console.log(event.target);
      
  }
  
    render() {
      return (
        <button onClick={this.handleClick    }>
          Click
          </button>
      )
    }
  }

  class YellowButton extends Button {
    render() {
        return (
          <button onClick={this.handleClick    }>
            Yellow Button
            </button>
        )
      }
  }



export class Inheritance extends Component {


  render() {
    return (
        <div>
             <Button/>
             <YellowButton />
        </div>
     
    )
  }
}

export default Inheritance