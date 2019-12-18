import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store';

import {
  FormWrapper,
  OptionWrapper,
  OptionItem,
  SelectWrapper,
  SlectItem,
  DateBox,
  DateItem,
  BtnWrapper,
  BtnItem,
  TabWrapper,
  TabTop,
  TabFarWrapper,
  TabFarLi,
  TabSonWrapper,
  TabSonLi,
  TurnPageWrapper
} from './style';

class Form extends Component {
  componentDidMount() {
    this.props.getListData(this.props.onePageDataNum, this.props.nowPageNum)
  }

  handleListData = (showList) => {
    if (showList.length > 0) {
      const newShowList = showList.map((item) => {
        return (
          <TabFarLi key={item.id}>
            <TabSonWrapper>
              <TabSonLi>{item.day}</TabSonLi>
              <TabSonLi className="short">{item.payorder}</TabSonLi>
              <TabSonLi className="short">{item.freeorder}</TabSonLi>
              <TabSonLi className="short">{item.singleprice}</TabSonLi>
              <TabSonLi>{item.totalprice}</TabSonLi>
              <TabSonLi className="short">{item.vipafterdatenum}</TabSonLi>
              <TabSonLi>{item.neworderAndPay}</TabSonLi>
              <TabSonLi>{item.againorderAndPay}</TabSonLi>
              <TabSonLi>{item.updateorderAndPay}</TabSonLi>
              <TabSonLi className="short">{item.autoagainorder}</TabSonLi>
              <TabSonLi className="short">{item.vipagainpaynumper}</TabSonLi>
              <TabSonLi className="short">{item.monthcycleAndPay}</TabSonLi>
              <TabSonLi>{item.aquartercycleAndPay}</TabSonLi>
              <TabSonLi>{item.sixmonthscycleAndPay}</TabSonLi>
              <TabSonLi>{item.ayearcycleAndPay}</TabSonLi>
              <TabSonLi className="short">分析</TabSonLi>
            </TabSonWrapper>
          </TabFarLi>
        )
      })
      return newShowList
    } else {
      return <div>没有数据</div>
    }
  }

  render() {
    const {
      handleList,
      showList,
      initList,
      totelPage,
      nowPageNum,
      onePageDataNum,
      queryClick,
      turnOtherPage,
      selectChange } = this.props;
    return (
      <FormWrapper>
        <OptionWrapper>
          <OptionItem>
            <SelectWrapper>
              <SlectItem>
                <option>交易</option>
                <option>付费人数</option>
                <option>免费人数</option>
                <option>总收入</option>
              </SlectItem>
              <SlectItem ref='select' onChange={() => selectChange(this.refs.select.value, nowPageNum, handleList)}>
                <option>页条数</option>
                <option>5</option>
                <option>10</option>
              </SlectItem>
            </SelectWrapper>
            <DateBox className='date'>
              <span>日期选择</span>
              <DateItem type='date' ref='startDate' defaultValue="2019-09-19" />
              -
               <DateItem type='date' ref='endDate' defaultValue="2019-09-25" />
            </DateBox>
            <BtnWrapper>
              <BtnItem onClick={() => queryClick(
                this.refs['startDate'].value,
                this.refs['endDate'].value,
                initList,
                onePageDataNum,
                nowPageNum
              )}>
                查询
              </BtnItem>
              <BtnItem>同步</BtnItem>
            </BtnWrapper>
            <span>上次更新时间：</span>
          </OptionItem>
        </OptionWrapper>
        <TabWrapper>
          <TabTop>
            <div>日期</div>
            <div className="short">付费人数</div>
            <div className="short">免费人数</div>
            <div className="short">客单价</div>
            <div>总收入</div>
            <div className="short">到期(人)</div>
            <div>新订(单)</div>
            <div>续订(单)</div>
            <div>升级(单)</div>
            <div className="short">后台单</div>
            <div className="short">续订率</div>
            <div className="short">一个月(单)</div>
            <div>一季度(单)</div>
            <div>半年(单)</div>
            <div>一年(单)</div>
            <div className="short">来源</div>
          </TabTop>
          <TabFarWrapper>
            {this.handleListData(showList)}
          </TabFarWrapper>
          <TurnPageWrapper>
            <span onClick={() => turnOtherPage(this.refs.previous_page, handleList, nowPageNum, onePageDataNum, totelPage)} ref='previous_page'>上一页</span>
            <span>{nowPageNum}/{totelPage}</span>
            <span onClick={() => turnOtherPage(this.refs.next_page, handleList, nowPageNum, onePageDataNum, totelPage)} ref='next_page' >下一页</span>
          </TurnPageWrapper>
        </TabWrapper>
      </FormWrapper>
    )
  }
}

const mapState = (state) => ({
  showList: state.getIn(['form', 'showList']),
  handleList: state.getIn(['form', 'handleList']),
  initList: state.getIn(['form', 'initList']),
  totelPage: state.getIn(['form', 'totelPage']),
  nowPageNum: state.getIn(['form', 'nowPageNum']),
  onePageDataNum: state.getIn(['form', 'onePageDataNum']),
})

const mapDispatch = (dispatch) => ({
  getListData(onePageDataNum, nowPageNum) {
    dispatch(actionCreater.getListData(onePageDataNum, nowPageNum))
  },

  queryClick(startDate, endDate, initList, onePageDataNum, nowPageNum) {
    dispatch(actionCreater.queryClick(startDate, endDate, initList, onePageDataNum, nowPageNum))
  },

  turnOtherPage(e, handleList, nowPageNum, onePageDataNum, totelPage) {
    if (e.innerHTML === '上一页') {
      dispatch(actionCreater.turnPageAction(-1, handleList, nowPageNum, onePageDataNum, totelPage))
    } else {
      dispatch(actionCreater.turnPageAction(1, handleList, nowPageNum, onePageDataNum, totelPage))
    }
  },
  
  selectChange(value, nowPageNum, handleList) {
  
    if (isNaN(value) === false) {
      dispatch(actionCreater.selectChange(value, handleList))
    }
  }
})

export default connect(mapState, mapDispatch)(Form) 