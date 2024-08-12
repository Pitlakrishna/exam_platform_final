import { createContext, useState } from "react";

// Create the context
export const markContext = createContext();

// Create the provider component
export const MarkProvider = ({ children }) => {
    const [marksObtained, setMarksObtained] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0)
    const [questionsAttempted, SetQuestionalsAttempted] = useState(0)
    const [AnsweredQuestionsList, setAnsweredQuestionsList] = useState([])
    const [gradeScore, setGradeScore] = useState({ status: "", grade: 0 });

    const handleMarks = (marks, questionsLength, answeredQuestionCount, answeredQuestionsList) => {
        setMarksObtained(marks);
        setTotalQuestions(questionsLength);
        SetQuestionalsAttempted(answeredQuestionCount);
        setAnsweredQuestionsList(answeredQuestionsList)
    };

    const HandleGradeScore = ({ status, gradeGot }) => {
        setGradeScore({ status, grade: gradeGot })
    }

    return (
        <markContext.Provider value={{ marksObtained, gradeScore, HandleGradeScore, handleMarks, totalQuestions, questionsAttempted, AnsweredQuestionsList }}>
            {children}
        </markContext.Provider>
    );
};