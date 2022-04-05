import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuth: false
  }
  toggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  }
  render() {
    return (
      <AuthContext.Provider
        value={{ toggleAuth: this.toggleAuth, ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
