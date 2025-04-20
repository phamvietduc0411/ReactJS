import React, { Component } from 'react'

class Button extends Component {
    handleClick = (event) => {
        console.log(event.target);
        
    }
    
      render() {
        const {className = '', children} = this.props
        return (
          <button className={className}  onClick={this.handleClick }>
            Click {children}
            </button>
        )
      }
  }
class Composition extends Component {
  render() {
    return (
      <div>
        <Button/>
        <Button className='Yellow-btn' >Yellow</Button>
      </div>
    )
  }
}

export default Composition