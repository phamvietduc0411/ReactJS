import React from 'react'

class LoginButton extends React.Component {
  //   handleLogin = () => {
  //     console.log('Loginnnn')
  //   }

  render() {
    return (
      <button className='login-btn' onClick={this.props.onClick}>
        Login
      </button>
    )
  }
}

class LogoutButton extends React.Component {
  //   handleLogout = () => {
  //     console.log('Logout')
  //   }

  render() {
    return (
      <button className='logout-btn' onClick={this.props.onClick}>
        Logout
      </button>
    )
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLog: false }
  }

  isLogin = () => {
    this.setState({ isLog: false })
  }

  isLogout = () => {
    this.setState({ isLog: true })
  }
  render() {
    // const { isLog } = this.props
    const { isLog } = this.state
    console.log(this.state)

    return (
      <div className='login-control'>
        {!isLog ? <LoginButton onClick={this.isLogout} /> : <LogoutButton onClick={this.isLogin} />}
      </div>
    )
  }
}

export default LoginControl
