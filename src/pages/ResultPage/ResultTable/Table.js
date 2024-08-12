
import './Table.css'
import { IoStar } from 'react-icons/io5';
import React, { useContext, useEffect, useState } from 'react'
import Stars from '../Stars/Stars';
import CircularProgress from "../ProgressBar/progress.js"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { markContext } from "../../../context/marks.js"

const Result = () => {

    const { AnsweredQuestionsList, totalQuestions } = useContext(markContext);

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [notAnswered, setNotAnswered] = useState(0);
    const [attempted, setAttempted] = useState(0);

    useEffect(() => {
        let correctCount = 0;
        let incorrectCount = 0;
        let notAnsweredCount = 0;
        let attemptedCount = 0;

        AnsweredQuestionsList.forEach(question => {
            if (question === undefined) {
                notAnsweredCount++;
            } else {
                attemptedCount++;
                if (question.isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
        });
        // Update states
        setCorrect(correctCount);
        setIncorrect(incorrectCount);
        setNotAnswered(notAnsweredCount);
        setAttempted(attemptedCount);
    }, [AnsweredQuestionsList]);


    return (
        <div className='result_bg_container' >
            {
                // console.log(marksObtained)
                console.log(AnsweredQuestionsList)
            }
            <div className='content'>
                <h1 className='live_result_heading'>Live Result</h1>
                <div className='cards_container gap-4 '   > {/*col-md-10 */}
                    <div className='student_data_container ' style={{ lineHeight: '2px' }}>
                        <h1 className='py-3'
                            style={{ color: "rgb(8, 131, 131)", paddingLeft: '36px', fontSize: '20px', marginBottom: '25px', borderBottom: "2px solid #ECECEC", backgroundColor: "#F8F9FA", borderRadius: '10px 10px 0 0 ' }}>
                            Student Basic Information
                        </h1>
                        <div className='field_container' style={{ marginTop: "5px" }} >
                            <p className='name_para'>Name <span > :</span></p>
                            <p className='value_para '>{"Shashank"}</p>
                        </div>
                        <div className='field_container'>
                            <p className='name_para'>Phone <span > :</span></p>
                            <p className='value_para    '>{8965652365}</p>
                        </div>
                        <div className='field_container'>
                            <p className='name_para' >Email <span > :</span></p>
                            <div className='valueParaEmailValue'>
                                <p className='value_para '  >{"shashankmende88@gmail.com"}</p>
                            </div>
                        </div>
                        <div className='field_container'>
                            <p className='name_para'>DOB <span > :</span></p>
                            <p className='value_para    '>{"25/02/2003"}</p>
                        </div>
                    </div>
                    <div className='result_data_container'>
                        <h1 className='performance_heading py-3' style={{ fontSize: '20px', borderBottom: "2px solid #ECECEC", backgroundColor: "#F8F9FA", borderRadius: '10px 10px 0 0 ' }} >
                            Your Overall Performance Report
                        </h1>
                        <div className='d-flex flex-row my-auto p-0'  >
                            <div style={{ borderRight: '2px solid #ECECEC', marginTop: '-10px', marginBottom: '-23px' }}  >
                                <div className='result_field_container' style={{ marginTop: '35px' }} >
                                    <p className='result_field  '>Attempted <span > :</span></p>
                                    <p className='result_value'><span style={{ color: "blue", fontWeight: "bold", margin: "6px" }}>{attempted}</span>/{totalQuestions}</p>
                                </div>
                                <div className='result_field_container'>
                                    <p className='result_field'>Correct <span > :</span></p>
                                    <p className='result_value'><span style={{ color: "green", fontWeight: "bold", margin: "6px" }}>{correct}</span>/{totalQuestions}</p>
                                </div>
                                <div className='result_field_container'>
                                    <p className='result_field'>In-correct <span > :</span></p>
                                    <p className='result_value'><span style={{ color: "red", fontWeight: "bold", margin: "6px" }}>{incorrect}</span>/{totalQuestions}</p>
                                </div>
                            </div>
                            <div className='progress m-auto'
                                style={{ height: '100%', backgroundColor: 'white' }}  >
                                <CircularProgress
                                    value={Math.round((correct / totalQuestions) * 100)}
                                    maxValue={100}
                                    radius={90}
                                    customTextLines={[`${Math.round((correct / totalQuestions) * 100)}%`, 'Marks', 'Achieved!']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Result