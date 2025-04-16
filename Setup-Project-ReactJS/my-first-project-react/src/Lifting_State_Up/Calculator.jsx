import React, { Component } from 'react'
import Temperature from './Temperature'

export class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         temperature: '',
         scale: 'c'
      }
    }

    celsiusToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    }

    fahrenheitToCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    }

    handleChange = (scale) => (value) => {
        this.setState({
            scale: scale,
            temperature: value
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.fahrenheitToCelsius(temperature) : temperature;
        const fahrenheit = scale === 'c' ? this.celsiusToFahrenheit(temperature) : temperature;

        return (
            <div>
                <Temperature 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange('c')} 
                />
                <Temperature 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange('f')} 
                />
            </div>
        )
    }
}

export default Calculator