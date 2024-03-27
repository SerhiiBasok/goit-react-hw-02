import React from "react";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const handleClick = (type) => {
    updateFeedback(type);
  };

  const handleReset = () => {
    resetFeedback();
  };
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
