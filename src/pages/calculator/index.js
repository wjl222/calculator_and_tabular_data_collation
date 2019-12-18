import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CalculatorAction } from './store';
import { ClaWrapper, NumWrapper, KeyWrapper, KeyLine, KeyItem, SpinnerWrapper, SpainnerItem  } from './style';

class Calculator extends Component {
  render() {
    const { inputValue, keyItemClick, clearInputValue, equalBtnClick, addPlusOrMin } = this.props;
    return (
      <ClaWrapper className='cal-container'>
        <NumWrapper>
          <textarea id="num" readOnly="readonly" value={inputValue} />
        </NumWrapper>
        <KeyWrapper>
          <KeyLine className='btn-line'>
            <KeyItem className='nor-symbol' onClick={clearInputValue}>AC</KeyItem>
            <KeyItem className='nor-symbol' onClick={() => addPlusOrMin(inputValue)} >+/-</KeyItem>
            <KeyItem className='nor-symbol' onClick={keyItemClick}>%</KeyItem>
            <KeyItem className='num-symbol' onClick={keyItemClick}>÷</KeyItem>
          </KeyLine>
          <KeyLine className='btn-line'>
            <KeyItem className='num-btn' onClick={keyItemClick}>7</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>8</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>9</KeyItem>
            <KeyItem className='num-symbol' onClick={keyItemClick}>×</KeyItem>
          </KeyLine>
          <KeyLine className='btn-line'>
            <KeyItem className='num-btn' onClick={keyItemClick}>4</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>5</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>6</KeyItem>
            <KeyItem className='num-symbol' onClick={keyItemClick}>-</KeyItem>
          </KeyLine>
          <KeyLine className='btn-line'>
            <KeyItem className='num-btn' onClick={keyItemClick}>1</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>2</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>3</KeyItem>
            <KeyItem className='num-symbol' onClick={keyItemClick}>+</KeyItem>
          </KeyLine>
          <KeyLine className='btn-line'>
            <KeyItem className='num-btn' onClick={keyItemClick}>0</KeyItem>
            <KeyItem className='num-btn zero' onClick={keyItemClick}>0</KeyItem>
            <KeyItem className='num-btn' onClick={keyItemClick}>.</KeyItem>
            <KeyItem className='num-symbol' onClick={() => equalBtnClick(inputValue)}>=</KeyItem>
          </KeyLine>
        </KeyWrapper>
        <SpinnerWrapper className={ this.props.isSpinnerShow ? 'spinner' : 'spinner hide' }>
          <SpainnerItem className="spi-box1" />
          <SpainnerItem className="spi-box2" />
          <SpainnerItem className="spi-box3" />
          <SpainnerItem className="spi-box4" />
          <SpainnerItem className="spi-box5" />
          <SpainnerItem className="spi-box6" />
          <SpainnerItem className="spi-box7" />
          <SpainnerItem className="spi-box8" />
          <SpainnerItem className="spi-box9" />
          <SpainnerItem className="spi-box10" />
          <SpainnerItem className="spi-box11" />
          <SpainnerItem className="spi-box12" />
        </SpinnerWrapper>
      </ClaWrapper>
    )
  }
}

const mapState = (state) => ({
  inputValue: state.getIn(['calculator', 'inputValue']),
  isSpinnerShow: state.getIn(['calculator','isSpinnerShow'])
})

const mapDispatch = (dispacth) => ({
  keyItemClick(e) {
    dispacth(CalculatorAction.keyItemClick(e.target.innerHTML))
  },
  clearInputValue() {
    dispacth(CalculatorAction.clearInputValue())
  },
  equalBtnClick(value) {
    dispacth(CalculatorAction.handleSpinnerShow());
    dispacth(CalculatorAction.computeRes(value));
  },
  addPlusOrMin(value) {
    dispacth(CalculatorAction.addPlusOrMin(value));
  }
})

export default connect(mapState, mapDispatch)(Calculator);