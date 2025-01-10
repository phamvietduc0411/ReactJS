import React from 'react'

class LoginButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Login button </button>
      </div>
    )
  }
}

class LogOut extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Logout button </button>
      </div>
    )
  }
}

class LoginCotrol extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isLoggedIn: false }
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: false })
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {
    const { isLoggedIn } = this.state

    return <div>{isLoggedIn ? <LoginButton onClick={this.handleLogin} /> : <LogOut onClick={this.handleLogout} />}</div>
  }
}

export default LoginCotrol
