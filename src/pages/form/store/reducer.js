import { fromJS } from 'immutable';
import { LIST_DATA_ACTION, QUERY_LIST_ACTION, TURN_PAGE, SELECT_NUM_CHANGE } from './contants'

const defaultAction =   fromJS({
  initList: [],
  handleList: [],
  showList: [],
  totelPage: '',
  nowPageNum: '1',
  onePageDataNum: '10'
})

export default (state = defaultAction,action) => {
  switch(action.type) {
    case LIST_DATA_ACTION:
      return state.merge({
        'showList':action.showListData,
        'handleList':action.listData,
        'initList':action.listData,
        'totelPage':action.totelPage
      })
    case QUERY_LIST_ACTION: 
      return state.merge({
        'showList':action.showListData,
        'handleList':action.handleList,
        'totelPage':action.totelPage
      })
      case TURN_PAGE: 
      return state.merge({
        'showList':action.showListData,
        'nowPageNum': action.newPageNum,
      })
      case SELECT_NUM_CHANGE: 
      return state.merge({
        'onePageDataNum':action.newOnePageDataNum,
        'showList': action.showListData,
        'totelPage':action.newTotelPage,
        'nowPageNum': action.newPageNum
      })
    default: 
      return state
  }
}