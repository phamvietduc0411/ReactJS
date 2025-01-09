import React from 'react'
import PropTypes from 'prop-types'
class PropsChild extends React.Component {
  render() {
    console.log(this.props)

    return <div className='Props'>{this.props.children}</div>
  }
}

PropsChild.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default PropsChild
