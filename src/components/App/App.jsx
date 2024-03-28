// App.jsx
import React, { useState, useEffect } from "react";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Descriptions from "../Description/Descriptions.jsx";
import Notification from "../Notification/Notification.jsx";

const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && (
        <>
          <Feedback
            feedback={feedback}
            updateFeedback={updateFeedback}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </>
      )}
      {totalFeedback === 0 && <Notification message="No feedback given yet" />}
    </>
  );
};

export default App;
