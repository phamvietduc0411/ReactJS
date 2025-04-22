import React, { Component , Fragment} from 'react'

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
      <>
        <Button/>
        <Button className='Yellow-btn' >Yellow</Button>
      </>
    )
  }
}

export default Composition