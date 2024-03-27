// Feedback.jsx
import React from "react";

const Feedback = ({ feedback, updateFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
    </div>
  );
};

export default Feedback;
