import React, { useContext, useState } from 'react';
import { message, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
import { markContext } from '../../context/marks';
import './index.css'

const Question = ({ answeredQuestionsList, answeredQuestion, correctAnswered, question, options,
  handleOptionClick, handleNextQuestion, currentQuestionIndex,
  selectedOptionIndex, questionsLength }) => {
  const [answeredIndex, setAnsweredIndex] = useState(0)


  const { handleMarks } = useContext(markContext);

  const navigate = useNavigate()

  const SubmitHandle = (e) => {
    console.log(e);
    message.success('Successfully Completed Technical Round!');
    handledNextQue(answeredIndex)
    setTimeout(() => {
      navigate('/question-popup')
    }, 2000)

    const totalQuestions = questionsLength;
    const marks = correctAnswered;
    const answeredQuestionsListUpdated = answeredQuestionsList;
    const answeredQuestionCount = answeredQuestion / 2

    handleMarks(marks, totalQuestions, answeredQuestionCount, answeredQuestionsListUpdated);
  };


  const handleOptionClickChild = (index) => {
    handleOptionClick(index)
    setAnsweredIndex(index)
  }

  const handledNextQue = () => {
    handleNextQuestion(answeredIndex)
  }

  return (
    <div className="d-flex flex-column gap-3 bg-light p-5"
      style={{ width: "90%", height: "100%", borderRadius: "30px", border: "1px solid #c0c5ee" }}>
      <div className='questionHead'>
        <h1 className='questionNumber' >{currentQuestionIndex + 1}</h1>
        <h1 className='heading' > {question}</h1>
      </div>
      <div className="mt-5">
        <div className='QestionOptions' >
          {options.map((option, index) => (
            <label key={index} htmlFor={index}
              onClick={() => handleOptionClickChild(index)}
              className={`d-flex flex-row align-items-center gap-3  option-button ${selectedOptionIndex === index ? 'selected' : ''}`}
              style={{
                padding: '30px', marginBottom: '15px',
                width: "95%", height: "45px", border: "2px solid #D3D3D3",
                borderRadius: "10px", fontWeight: '700',
                color: selectedOptionIndex === index ? 'white' : 'black',
              }}>
              <input className='radioBtn' type="radio" name='option' id={index} value="python" checked={index === selectedOptionIndex} />
              <span className='fs-6' htmlFor={index}>{option}</span>
            </label>
          ))}
        </div>
        <div className="d-flex flex-row align-items-center justify-content-end gap-3" style={{ width: "100%" }}>
          {((currentQuestionIndex + 1) !== (questionsLength)) ?
            <button className="btn " style={{ backgroundColor: '#265A98', color: 'white', border: '1px solid #265A98', width: '100px', marginRight: "20px" }} onClick={handledNextQue}>Next</button> :
            <div>
              <button className={`btn  text-white ms-auto me-4 `}
                onClick={SubmitHandle}
                style={{ backgroundColor: '#C52F33', color: 'white', border: '1px solid #C52F33', width: '100px' }} >Submit</button>
              <button className="btn"
                style={{ backgroundColor: '#265A98', color: 'white', border: '1px solid #265A98', width: '100px', marginRight: "20px" }} onClick={handledNextQue}>Save</button>
            </div>
          }
        </div>
      </div>
    </div >
  );
};

export default Question;