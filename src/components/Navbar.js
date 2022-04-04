import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// this way is more useful and wise.
class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = this.context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.bg, color: theme.syntax }}>
              <h1>Context App</h1>
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
    );
  }
}

export default Navbar;