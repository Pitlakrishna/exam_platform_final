import { createContext, useState } from "react";

// Create the context
export const markContext = createContext();

// Create the provider component
export const MarkProvider = ({ children }) => {
    const [marksObtained, setMarksObtained] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0)
    const [questionsAttempted, SetQuestionalsAttempted] = useState(0)
    const [AnsweredQuestionsList, setAnsweredQuestionsList] = useState([])
    // const [gradeScore, setGradeScore] = useState({ status: "", grade: 3 });

    const handleMarks = (marks, questionsLength, answeredQuestionCount, answeredQuestionsList) => {
        setMarksObtained(marks);
        setTotalQuestions(questionsLength);
        SetQuestionalsAttempted(answeredQuestionCount);
        setAnsweredQuestionsList(answeredQuestionsList)
        // setGradeScore(gradeScore)
    };

    return (
        <markContext.Provider value={{ marksObtained, handleMarks, totalQuestions, questionsAttempted, AnsweredQuestionsList }}>
            {children}
        </markContext.Provider>
    );
};