import React, { Component } from 'react';
import { HeaderWrapper } from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className='slogan'>
          <img src = {require("../../static/img/logo.png")} alt='' />
          <p className="txt"> 每天进步一点点，离目标更近一点</p>
        </div>
        <div className='name-login'>
          <p>姓名</p>
          <a href="/">退出</a>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;