import React from "react";

export const Income = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rp.0</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rp.0</p>
      </div>
    </div>
  );
};
