import { KEY_ITEM_CLICK_ACTION, CLEAR_INPUT_VALUE, COMPUTE_RESULT, ERR, ADD_PLUS_OR_MIN, SPAINNER_SHOW } from "./contants";

export const keyItemClick = (value) => ({
  type: KEY_ITEM_CLICK_ACTION,
  value
})

export const clearInputValue = () => ({
  type: CLEAR_INPUT_VALUE
})

export const computeRes = (value) => ((dispatch) => {
  setTimeout(() => {
    try {
      value = value.replace(/×/g, "*");
      value = value.replace(/÷/g, "/");
      const res = eval(value.toString());
      const newRes = parseFloat(res.toFixed(10));
      const action = {
        type: COMPUTE_RESULT,
        newRes
      }
      dispatch(action)
    } catch (err) {
      const newRes = err
      const action = {
        type: ERR,
        newRes
      }
      dispatch(action)
    }
  }, 1000);
})

export const addPlusOrMin = (value) => {
  if (isNaN(value) === true) {
    value += '-'
  } else {
    value[0] === '-' ? value = value.replace('-', '') : value = '-' + value
  }
  const action = {
    type: ADD_PLUS_OR_MIN,
    value,
    isSpainnerShow: false
  }
  return action
}

export const handleSpinnerShow = () => ({
  type: SPAINNER_SHOW,
  isSpinnerShow: true
})