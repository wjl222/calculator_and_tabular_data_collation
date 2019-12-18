import styled from 'styled-components';

export const NavWrapper = styled.div`
  height: 40px;
  border-bottom: 1px rgb(226, 226, 226) solid ;
  button {
    margin-top: 15px;
    padding: 5px 15px;
    background: #fff;
    box-sizing: border-box;
    border-top: 1px #fff solid ;
    border-left: 1px #fff solid;
    border-right: 1px #fff solid;
    border-bottom: 1px rgb(226, 226, 226) solid;
    &.active {
      background: rgb(48,144,234);
      color: #fff;
    }
  }
`