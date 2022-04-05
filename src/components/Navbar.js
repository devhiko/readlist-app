import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// this way is more useful and wise.
class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{authContext => (
        <ThemeContext.Consumer>{themeContext => {
          const { isAuth, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav
              style={{ background: theme.ui, color: theme.syntax }}
            >
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                {isAuth ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
          {/* {ctx=>{
          ...
          return(JSX)
      }} */}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;