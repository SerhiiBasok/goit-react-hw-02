// Feedback.jsx
import React from "react";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback percentage:{positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
