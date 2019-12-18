import { fromJS } from 'immutable';
import { KEY_ITEM_CLICK_ACTION, CLEAR_INPUT_VALUE, COMPUTE_RESULT, ERR, ADD_PLUS_OR_MIN, SPAINNER_SHOW } from './contants';

const defaultState = fromJS({
  value: '',
  inputValue: '',
  isSpinnerShow: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case CLEAR_INPUT_VALUE:
      return state.merge({
        'value':'',
        'inputValue':''
      })
      case KEY_ITEM_CLICK_ACTION:
        const newInputValue = state.get('inputValue') + action.value;
        return state.merge({
          'value':action.value,
          'inputValue':newInputValue
        })
      case COMPUTE_RESULT:
        return state.merge({
          'value': '' ,
          'inputValue':action.newRes,
          'isSpinnerShow': false
        })
      case ERR:
        return state.merge({
          'value': '' ,
          'inputValue':action.newRes,
          'isSpinnerShow': false
        })
      case ADD_PLUS_OR_MIN:
        return state.set('inputValue',action.value)
      case SPAINNER_SHOW: 
        return state.set('isSpinnerShow',action.isSpinnerShow)
      default:
        return state;
  }
}