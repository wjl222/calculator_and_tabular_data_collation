import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavWrapper } from './style'

class NavCon extends Component {
  render() {
    const { location } = this.props;
    return (
      <NavWrapper>
        <Link to='/'>
          <button className= { location.pathname === '/' ? 'active': '' }>首页</button>
        </Link>
        <Link to='/dataAnalysis'>
          <button className= { location.pathname === '/dataAnalysis' ? 'active': '' }>收入分析</button>
        </Link>
      </NavWrapper>
    )
  }
}

export default  withRouter(NavCon);