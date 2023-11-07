import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Redux/Counter';

const Count = () => {
    const Count =  useSelector(state=>state.count.count)
    console.log(Count );
    const dispatch = useDispatch()
  return (
    <div>
        <h1>See result</h1>
      <div></div>
    </div>
  );
}

export default Count;
