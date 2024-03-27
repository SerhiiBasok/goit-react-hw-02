import React from "react";

const TotalFeedbacks = ({ totalFeedback, positivePercentage }) => {
  return (
    <div>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default TotalFeedbacks;
