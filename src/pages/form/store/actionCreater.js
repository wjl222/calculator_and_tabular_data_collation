import axios from 'axios';
import { LIST_DATA_ACTION, QUERY_LIST_ACTION, TURN_PAGE, SELECT_NUM_CHANGE } from './contants';

const handleData = (data) => {
  const newData = data.map((item) => {
    delete (item.app);
    delete (item.getbackorder);
    delete (item.refunsorder);
    delete (item.refunsprice);
    /*
     *数据处理依次是：新订、续订、升级、一季度、升级、一季度、月订单、半年、一年、续订率
     */
    item.neworderAndPay = item.neworder.concat('(', item.neworderpay, ')元');
    item.againorderAndPay = item.againorder.concat('(', item.againorderpay, ')元');
    item.updateorderAndPay = item.updateorder.concat('(', item.updateorderpay, ')元');
    item.aquartercycleAndPay = item.aquartercycle.concat('(', item.aquartercyclepay, ')元');
    item.monthcycleAndPay = item.monthcycle.concat('(', item.monthcyclepay, ')元');
    item.sixmonthscycleAndPay = item.sixmonthscycle.concat('(', item.sixmonthscyclepay, ')元');
    item.ayearcycleAndPay = item.ayearcycle.concat('(', item.ayearcyclepay, ')元');
    item.vipagainpaynumper = item.vipagainpaynum.concat('%');

    delete (item.neworder);
    delete (item.neworderpay);
    delete (item.againorder);
    delete (item.againorderpay);
    delete (item.updateorder);
    delete (item.updateorderpay);
    delete (item.sixmonthscycle);
    delete (item.sixmonthscyclepay);
    delete (item.aquartercycle);
    delete (item.aquartercyclepay);
    delete (item.ayearcycle);
    delete (item.ayearcyclepay);
    delete (item.monthcycle);
    delete (item.monthcyclepay);
    return item;
  }
  )
  return newData
}

const timeStamp = (formatTime) => {
  const timeStamp = new Date(formatTime);
  return timeStamp
}

const ListDataAction = (listData, totelPage, showListData) => ({
  type: LIST_DATA_ACTION,
  listData,
  totelPage,
  showListData
})

export const getListData = (onePageDataNum, nowPageNum) => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const newData = handleData(res.data.data);
      const totelPage = Math.ceil((newData.length / onePageDataNum));
      const showListData = newData.slice((nowPageNum - 1) * onePageDataNum, nowPageNum * onePageDataNum)
      dispatch(ListDataAction(newData, totelPage, showListData))
    })
  }
}

export const queryClick = (startDate, endDate, initList, onePageDataNum, nowPageNum) => {
  const startDateSta = timeStamp(startDate);
  const endDateSta = timeStamp(endDate);
  const handleList = initList.filter((item) => {
    return startDateSta <= timeStamp(item.day) && timeStamp(item.day) <= endDateSta
  })
  const totelPage = Math.ceil((handleList.length / onePageDataNum));
  const showListData = handleList.slice((nowPageNum - 1) * onePageDataNum, nowPageNum * onePageDataNum)
  return {
    type: QUERY_LIST_ACTION,
    handleList,
    showListData,
    totelPage
  }
}

export const turnPageAction = (value, handleList, nowPageNum, onePageDataNum, totelPage) => {
  const newPageNum = +nowPageNum + value;
  if ((value === 1 && +nowPageNum < totelPage) || (value === -1 && +nowPageNum > 1)) {
    const showListData = handleList.slice((newPageNum - 1) * onePageDataNum, newPageNum * onePageDataNum);
    return {
      type: TURN_PAGE,
      newPageNum,
      showListData
    }
  } else {
    return {
      type: ''
    }
  }

}

export const selectChange = (newOnePageDataNum, handleList) => {
  const newPageNum = 1;
  const newTotelPage = Math.ceil((handleList.length / newOnePageDataNum));
  const showListData = handleList.slice((newPageNum - 1) * newOnePageDataNum, newPageNum * newOnePageDataNum)
  return {
    type: SELECT_NUM_CHANGE,
    newOnePageDataNum,
    showListData,
    newTotelPage,
    newPageNum
  } 
}