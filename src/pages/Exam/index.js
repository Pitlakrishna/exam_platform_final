import { useContext, useEffect, useState, useCallback } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { QuestionNavigation } from "../../components/QuetionNav";
import { useNavigate } from "react-router-dom";
import { questions } from "../../data";
import { ControlledContext } from "../../context/controlledContext";
import { AuthContext } from "../../context/authContext";
import { Timer } from "../../components/Timer";
import Question from '../../components/Question'
import './index.css'




export const ExamPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [questionStatuses, setQuestionStatuses] = useState(Array(questions.length).fill('unattempted'));
    const [examTimeLeft, setExamTimeLeft] = useState(3600); // 1 hour
    const [timeLeft, setTimeLeft] = useState(60);
    const [alertCount, setAlertCount] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]); // To store the answered questions
    const navigate = useNavigate();
    const { logindispatch } = useContext(AuthContext);
    const { state, dispatch } = useContext(ControlledContext);
    const [marksScored, setMarksScored] = useState(0);
    const [answeredQuestionCount, setAnsweredQuestionCount] = useState(0);

    const onSubmitClick = useCallback(() => {
        logindispatch({ type: "LOGOUT" });
        navigate("/feedback");
    }, [logindispatch, navigate]);

    useEffect(() => {
        if (examTimeLeft > 0) {
            const examTimerId = setTimeout(() => setExamTimeLeft(examTimeLeft - 1), 1000);
            return () => clearTimeout(examTimerId);
        } else {
            onSubmitClick();
        }
    }, [examTimeLeft, onSubmitClick]);

    const handleOptionClick = (optionIndex) => {
        setAnsweredQuestionCount(prev => prev + 1);

        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setAnswers(newAnswers);

        const newStatuses = [...questionStatuses];
        newStatuses[currentQuestionIndex] = 'answered';
        setQuestionStatuses(newStatuses);

        const isCorrect = questions[currentQuestionIndex].correctOptionIndex === optionIndex;
        const score = isCorrect ? 1 : 0;

        // Add the question id, selected option index, and correctness to the answeredQuestions array
        const updatedAnsweredQuestions = [...answeredQuestions];
        updatedAnsweredQuestions[currentQuestionIndex] = {
            id: questions[currentQuestionIndex].id,
            selectedOptionIndex: optionIndex,
            isCorrect: score,
        };
        setAnsweredQuestions(updatedAnsweredQuestions);

        if (isCorrect) {
            setMarksScored(prevMark => prevMark + 1);
        }

        // console.log(updatedAnsweredQuestions);
    };

    const handleNextQuestion = () => {
        let nextIndex = currentQuestionIndex + 1;
        while (nextIndex < questions.length && questionStatuses[nextIndex] !== 'unattempted') {
            nextIndex++;
        }

        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        }
        setTimeLeft(60);
    };

    const handleQuestionClick = (index) => {
        if (index > currentQuestionIndex || questionStatuses[index] === 'unattempted') {
            setCurrentQuestionIndex(index);
            setTimeLeft(60);
        }
    };

    const handleTimeUp = () => {
        handleNextQuestion();
    };

    useEffect(() => {
        const controllingFullScreen = () => {
            if (document.visibilityState === 'hidden') {
                if (alertCount < 4) {
                    alert("You are under monitoring, please don't try to change tab...!");
                    setAlertCount(alertCount + 1);
                } else {
                    dispatch({ type: "notFullScreen", payload: false });
                    onSubmitClick();
                }
            }
        };

        document.addEventListener("visibilitychange", controllingFullScreen);
        return () => {
            document.removeEventListener("visibilitychange", controllingFullScreen);
        };
    }, [alertCount, dispatch, onSubmitClick]);

    useEffect(() => {
        if (state.isFullScreen) {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => console.error("Error attempting to enable fullscreen mode:", err));
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen().catch(err => console.error("Error attempting to enable fullscreen mode:", err));
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen().catch(err => console.error("Error attempting to enable fullscreen mode:", err));
            } else if (elem.msRequestFullScreen) {
                elem.msRequestFullScreen().catch(err => console.error("Error attempting to enable fullscreen mode:", err));
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }, [state.isFullScreen]);

    return (
        <div className="d-flex flex-column align-items-center gap-5 p-2" style={{ width: "100vw", height: "100vh", backgroundColor: "#f0f4f9" }}>
            <nav className="d-flex flex-row justify-content-between align-items-center" style={{ width: "100%", maxWidth: "1284px", height: "90px" }}>
                <img src="/images/logo.png" alt="nav-logo" style={{ width: "130px" }} />
                <div className="d-flex flex-row align-items-center gap-3">
                    <span className="fs-1 d-flex flex-row align-items-center"><IoPersonCircle /></span>
                </div>
            </nav>
            <div className="d-flex justify-content-center align-items-center gap-1 questionsContainer " >
                <div className="question-box d-flex flex-column gap-3 ">
                    <div className="d-flex flex-row justify-content-end" style={{ width: "71%" }}>
                        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} handleTimeUp={handleTimeUp} />
                    </div>
                    <Question
                        question={questions[currentQuestionIndex]?.questionText || "No Question Available"}
                        options={questions[currentQuestionIndex]?.options || []}
                        handleOptionClick={handleOptionClick}
                        handleNextQuestion={handleNextQuestion}
                        selectedOptionIndex={answers[currentQuestionIndex]}
                        questionsLength={questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        correctAnswered={marksScored}
                        answeredQuestion={answeredQuestionCount}
                        answeredQuestionsList={answeredQuestions}
                    />
                </div>
                <div className="numbersBox d-flex flex-column align-items-center" >
                    <div className="d-flex flex-column align-items-center gap-4 bg-light p-4" style={{ width: "100%", height: "100%", borderRadius: "30px", border: '1px solid #c0c5ee' }}>
                        <span className="d-flex flex-column gap-1 justify-content-center align-items-center">
                            <span>Overall Exam Time Left</span>
                            <span className="fw-bold" style={{ fontSize: "24px", color: '#219ebc' }}>{Math.floor(examTimeLeft / 60)}m {examTimeLeft % 60}s</span>
                        </span>
                        <QuestionNavigation
                            questionStatuses={questionStatuses}
                            handleQuestionClick={handleQuestionClick}
                        />
                        <div className="d-flex flex-column gap-2" style={{ marginTop: "1px" }}>
                            <span className="fw-bold text-center">Summary</span>
                            <div className="d-flex flex-row flex-wrap gap-5">
                                <span className="d-flex flex-row gap-2">
                                    <span style={{ height: "25px", width: "25px", backgroundColor: "green", border: "none", borderRadius: "50%" }}></span>
                                    <span style={{ fontSize: '16px' }}>Answered</span>
                                </span>
                                <span className="d-flex flex-row gap-2">
                                    <span style={{ height: "25px", width: "25px", backgroundColor: "#D3D3D3", borderRadius: "50%" }}></span>
                                    <span style={{ fontSize: '16px' }}>Unanswered</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

