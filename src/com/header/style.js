import styled  from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  color: rgb(65, 175, 43);
  background: #e9ffe4;
  line-height: 40px;
  div {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-right: 100px;
  }

  .slogan {
      margin-left: 50px;
  }

  .name-login {
      width: 100px;
  }

  img {
      height: 20px;
      width: 25px;
  }
` 