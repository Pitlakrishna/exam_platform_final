
import { IoPerson } from "react-icons/io5"
import './index.scss'
import { questions } from "../../data"
import { Question } from "../../components/Question"
import { useContext, useState } from "react"

export const ExamPage = () => {

    //current question
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    //all answers that users attempted
    const [answers, setAnswers] = useState([]);

    //handling the answers
    const onHandleChange = (value, index) => {
        console.log(answers);
        setAnswers((prev) => (
            prev.filter(answer => answer.id !== index).concat({ id: index, answer: value })
        ));
    };

    //handling the next question
    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    //handling the previous question
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    //submitting the answers
    const onQuestionsSubmit = (e) => {
        e.preventDefault();
        console.log(answers);
    }

    return (
        <div className="exam bg-light">
            <header className="exam-header d-flex align-items-center justify-content-between w-100">
                <div className="exam-logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="header-profile">
                    <IoPerson className="fs-1" />
                </div>
            </header>
            <div className="exam-section d-flex justify-content-between gap-5">
                <div className="exam-questions-container w-50">
                    <div className="timer">Timer</div>
                    <form className="questions" onSubmit={onQuestionsSubmit}>
                        <Question each={questions[currentQuestionIndex]} onChange={onHandleChange} />
                        <div className="navigation-buttons">
                            {currentQuestionIndex > 0 && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handlePrevious}
                                >
                                    Previous
                                </button>
                            )}
                            {currentQuestionIndex < questions.length - 1 ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
                <div className="question-type w-50">
                    <div className="">Overall Time</div>
                    <div className="">All Question Number</div>
                </div>
            </div>
        </div>
    )
}