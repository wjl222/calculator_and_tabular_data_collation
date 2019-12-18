import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  20% {
    border-top: 10px rgb(58, 58, 58) solid;
    border-right: 3px rgb(58, 58, 58) solid;
    border-left: 3px rgb(58, 58, 58) solid;
    border-bottom: 10px rgb(58, 58, 58) solid;
  }
`

export const ClaWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 340px;
  width: 240px;
  font-size: 20px;
  font-weight: 200;
  color: #fff;
  box-shadow: 0 0 0 1px rgb(46, 47, 42);
  background: rgb(46, 47, 42);
  .hide {
    display: none;
  }
`;

export const NumWrapper = styled.div`
  height: 90px;
  width: 100%;
  font-size: 60px;
  text-align: right;
  box-sizing: border-box;
  overflow: hidden;
  #num {
    float: right;
    width: 100%;
    height: 90px;
    max-height: 90px;
    padding-top: 18px;
    padding-right: 15px;
    text-align: right;
    border: none;
    color: #fff;
    box-sizing: border-box;
    overflow-y: hidden;
    background: transparent;
    resize: none;
    color: #fff;
    font-weight: 100;
  }
`

export const KeyWrapper = styled.div`
  width: 100%;
`

export const KeyLine = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  text-align: center;
`

export const KeyItem = styled.div`
  flex: 1;
  line-height: 50px;
  box-shadow: 0 0 0 1px rgb(46, 47, 42);
  box-sizing: border-box;
  &.zero {
    box-shadow: 1px 0px 0 1px rgb(46, 47, 42);
    font-size: 0;
  }
  &.num-btn {
    background: rgb(88, 89, 86)
  }
  &.nor-symbol {
    background: rgb(60, 61, 58)
  }
  &.num-symbol {
    font-size: 32px;
    background: rgb(243, 139, 34)
  }
`

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index:111;
  top: 50%;
  left: 50%;
  transform: translate(-3px,-50%);
  height: 80px;
  width: 80px;
  &.hide {
    display: none
  }
`
export const SpainnerItem = styled.div`
  position: absolute;
  transform-origin: 3px 40px;
  border-top: 10px rgb(221, 221, 221) solid;
  border-right: 3px rgb(221, 221, 221) solid;
  border-left: 3px rgb(221, 221, 221) solid;
  border-bottom: 10px rgb(221, 221, 221) solid;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  box-sizing: border-box;
  animation: ${loading} 2s infinite;
  &.spi-box1 {
    transform: rotate(${30*0}deg);
    animation-delay:0s;
  }

  &.spi-box2 {
      transform: rotate(${30*1}deg);
      animation-delay:0.1s;
  }

  &.spi-box3 {
      transform: rotate(${30*2}deg);
      animation-delay:0.2s;
  }

  &.spi-box4 {
      transform: rotate(${30*3}deg);
      animation-delay:0.3s;
  }

  &.spi-box5 {
      transform: rotate(${30*4}deg);
      animation-delay:0.4s;
  }

  &.spi-box6 {
      transform: rotate(${30*5}deg);
      animation-delay:0.5s;
  }

  &.spi-box7 {
      transform: rotate(${30*6}deg);
      animation-delay:0.6s;
  }

  &.spi-box8 {
      transform: rotate(${30*7}deg);
      animation-delay:0.7s;
  }

  &.spi-box9 {
      transform: rotate(${30*8}deg);
      animation-delay:0.8s;
  }

  &.spi-box10 {
      transform: rotate(${30*9}deg);
      animation-delay:0.9s;
  }

  &.spi-box11 {
      transform: rotate(${30*10}deg);
      animation-delay:1s;
  }

  &.spi-box12 {
      transform: rotate(${30*11}deg);
      animation-delay:1.1s;
  }
`


