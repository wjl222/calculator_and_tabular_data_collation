import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 99%;
  margin: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`
export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`
export const SlectItem = styled.select`
  height: 25px;
  width: 120px;
  padding-left: 15px;
  //清楚样式
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid rgb(195, 195, 195);
  background: url(../../img/pulldown.png) 93% center / 8px  no-repeat;
`

export const DateBox = styled.div`
  
`

export const DateItem =styled.input`
  color: #000;
  ::-webkit-datetime-edit-year-field {
      color: #000;
  }
  ::-webkit-datetime-edit-day-field {
      color: #000;
  }
  ::-webkit-datetime-edit-month-field {
      color: #000;
  }
`

export const BtnWrapper = styled.div`
  margin: 15px 10px;
`

export const BtnItem = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px
  padding: 5px 15px;
  margin-left: 10px;
  border: 1px rgb(219, 219, 219) solid;
  background: rgb(234, 234, 234);
  cursor: default;
  :hover {
    background: #3090ea;
    color: #fff;
  }

`

export const TabWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid rgb(223, 223, 223);
`
export const TabTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  border-bottom: 1px solid rgb(225, 225, 225) ;
  div {
    display: flex;
    align-items: center;
    flex: 1;
    text-align: left;
    box-sizing: border-box;
    padding: 5px 10px;
    line-height: 2;
  }
  .short {
    width: 85px;
    flex: none;
}
`

export const TabFarWrapper = styled.ul`
  margin: 0;
`

export const TabFarLi = styled.li`
  border-bottom: 1px solid rgb(225, 225, 225);
`

export const TabSonWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const TabSonLi = styled.li`
  display: flex;
  align-items: center;
  flex: 1;
  text-align: left;
  box-sizing: border-box;
  padding: 5px 10px;
  line-height: 2;

  &.short {
    width: 85px;
    flex: none;
  }
`

export const TurnPageWrapper = styled.div`
  padding: 20px 0;
  float: right;
  margin-right: 300px;
`