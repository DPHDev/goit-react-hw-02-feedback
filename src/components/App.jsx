import React, { useState } from 'react';
import { ChoiseBtns } from "./ChoiseBtns";
import { Counter } from "./Counter";

export const App = () => {

  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    approvePercent: 0,
    uses: false,
  };

  const [clicksCounter, updateClicksCounter] = useState(state);

  const increment = (choice) => {
    updateClicksCounter((prevState) => {
      const newState = {
        ...prevState,
        [choice]: prevState[choice] + 1,
        total: prevState.total + 1,
        uses: true,
      };
      
      newState.approvePercent = ((newState.good / newState.total) * 100).toFixed();

      return newState;
    });
  };

  return (
    <>
      <span>Please Leave Feedback</span>
      <ChoiseBtns increment={increment} />
      {
        clicksCounter.uses
        ? (<Counter good={clicksCounter.good} neutral={clicksCounter.neutral} bad={clicksCounter.bad} total={clicksCounter.total} approvePercent={clicksCounter.approvePercent} />)
        : (<span>There is no feedback</span>)
      }
    </>
  );
};
