import React from 'react';
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector(state => state.balance)


  return (
    <div>
      <h1 className="is-size-2">Balance : <strong>${balance}</strong>
      </h1>
    </div>
  )
};

export default Balance;
