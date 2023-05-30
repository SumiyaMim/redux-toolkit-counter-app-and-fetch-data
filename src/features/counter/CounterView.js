import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const CounterView = () => {

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className='container'>
    <div className='box'>
       <h1>COUNTER APP</h1><br></br>
       <h2>{count}</h2><br></br><br></br>
       <button className='button' onClick={() => {dispatch(increment())}}>Increment</button>
       <button className='button'onClick={() => {dispatch(reset())}}>Reset</button>
       <button className='button'onClick={() => {dispatch(decrement())}}>Decrement</button><br></br><br></br>
       <button className='button'onClick={() => {dispatch(incrementByAmount(5))}}>Increment By 5</button>
    </div>
    </div>
  )
}

export default CounterView
