import { useState } from "react";
import Counter from "./Counter";
import {useSelector, useDispatch} from 'react-redux';
import {incrementCount,decrementCount} from '../../redux/counterSlice';



function CounterAction() {
  const counterGlobalValue= useSelector(state=>state.counterStore.counter)

  const dispatch=useDispatch();

  const increment = () => {
    dispatch( incrementCount(10))
  };


  const decrrement = () => {
    dispatch( decrementCount(5))

  };




  return (
    <div>
      <Counter count={counterGlobalValue} increment={increment} decrrement={decrrement} />
    </div>
  );
}

export default CounterAction;
