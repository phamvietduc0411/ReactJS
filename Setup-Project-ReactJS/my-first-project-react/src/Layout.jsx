import React from 'react'
import PropTypes from 'prop-types'

class Layout extends React.Component {
  render() {
    return <div className='layOut'> {this.props.children}</div>
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Layout
