import React, { Component , createRef} from 'react'

export class UncontrollComponent extends Component {
    constructor(props) {
      super(props)
    this.input = createRef()
    this.inputFile = createRef()
      this.state = { 
        file: null
      }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.input.current.value);
        const form = new FormData();
        console.log(this.state.file.name);
        
        form.append('myFile', this.state.file)
    }

    handleInputFile = (event) => {
    console.log(event.target.files);
    this.setState( {
        file : event.target.files[0]
    })
 
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label >Name : <input ref={this.input}  type="text" /></label>
            <input type="submit"value='submit'  />
        <input type="file" name="inputFile" ref={this.inputFile} onChange={this.handleInputFile} />
        </form>
      </div>
    )
  }
}

export default UncontrollComponent