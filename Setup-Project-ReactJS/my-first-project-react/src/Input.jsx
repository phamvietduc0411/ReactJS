import React from 'react'
import PropTypes from 'prop-types'

function Input({ ...rest }) {
  return <input {...rest} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
}

export default Input
