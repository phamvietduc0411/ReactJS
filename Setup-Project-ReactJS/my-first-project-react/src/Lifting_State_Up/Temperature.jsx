import React, { Component } from 'react'

export class Temperature extends Component {
    constructor(props) {
      super(props)
    }

    handleChange = (event) => {
      this.props.onTemperatureChange(event.target.value);
    }
  
    render() {
        const {scale, temperature} = this.props;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}</legend>
                    <input 
                        type="text" 
                        value={temperature} 
                        onChange={this.handleChange} 
                    />
                </fieldset>
            </div>
        )
    }
}

export default Temperature