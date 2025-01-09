import React from 'react'
import PropTypes from 'prop-types'

// class BareInput extends React.Component {
//   render() {
//     return <input {...this.props} />
//   }
// }

function BareInput({ type, ...rest }) {
  return <input {...rest} />
}
BareInput.propTypes = {
  type: PropTypes.string
}

export default BareInput
