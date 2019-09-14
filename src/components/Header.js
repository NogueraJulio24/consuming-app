import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">Welcome</a>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header;