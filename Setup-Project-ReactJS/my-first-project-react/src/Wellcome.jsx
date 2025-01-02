import React from 'react'

// // Functional component

function Wellcome(props) {
  return <h1>Hello {props.name}</h1>
}

//Class component
// class Wellcome extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>
//   }
// }

export default Wellcome
