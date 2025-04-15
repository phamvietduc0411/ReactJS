import React, { Component } from 'react'

export class Form extends Component {
constructor(props) {
  super(props)
    this.state = {
        value: ''
    }
}

handleInput = (a) => {

this.setState(({
    value : a.target.value,
    textValue : ''
}))

}

//ngăn render lại khi mà nhấn submit
handleSubmit = (event) => {
event.preventDefault();
console.log(this.state.value + 'handleSubmit');
}
handleText = (a) => {
    this.setState(({
        textValue : a.target.value
    }))
}

  render() {
    console.log(this.state.value + 'value state ne');
    
    return (
      <div>
        <textarea value={this.state.textValue} onChange={this.handleText}>Hellooooo</textarea>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input onChange={this.handleInput} value={this.state.value}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form