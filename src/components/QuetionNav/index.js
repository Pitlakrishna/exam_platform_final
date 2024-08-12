import React from 'react';

export const QuestionNavigation = ({ questionStatuses, handleQuestionClick }) => {
  return (
    <div className="question-navigation d-flex flex-row flex-wrap gap-3" >
      {questionStatuses.map((status, index) => (
        <div
          key={index}
          className={`question-status ${status}`}
          onClick={() => handleQuestionClick(index)}
          style={{ border: "none", borderRadius: "50%", height: "35px", width: "35px" }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
};
