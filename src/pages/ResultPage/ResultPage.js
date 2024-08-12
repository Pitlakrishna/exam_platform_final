import React, { useContext, useState, useEffect } from 'react';
import Table from "./ResultTable/Table";
import "./index.css";
import ImageDownload from './DownloadCertificate/DownloadCerticate';
import { markContext } from '../../context/marks';

const ResultPage = () => {
    const [grade, setGrade] = useState({ status: "", gradeGot: 0, color: '', text: '' });

    const tableHead = ["Grade", "%Marks", "Interpretation"];
    const Grades = [
        { Grade: 1, Score: "0-39", Status: "Unsatisfactory" },
        { Grade: 2, Score: "40-49", Status: "Satisfactory" },
        { Grade: 3, Score: "50-64", Status: "Good" },
        { Grade: 4, Score: "65-79", Status: "Very Good" },
        { Grade: 5, Score: "80-100", Status: "Excellent" }
    ];
    const { marksObtained, totalQuestions, HandleGradeScore } = useContext(markContext);

    useEffect(() => {
        let marksScored = marksObtained / 2
        const score = ((marksScored) / totalQuestions) * 100;
        evaluateScore(score);
        HandleGradeScore(grade)
    }, [marksObtained, totalQuestions]);

    function evaluateScore(score) {
        if (score >= 0 && score <= 39) {
            setGrade({ status: "Unsatisfactory", gradeGot: 5, color: 'red', text: "Better luck next time." });
        } else if (score >= 40 && score <= 49) {
            setGrade({ status: "Satisfactory", gradeGot: 3, color: 'red', text: 'Better luck next time.' });
        } else if (score >= 50 && score <= 64) {
            setGrade({ status: "Good", gradeGot: 3, color: 'blue', text: 'Congratulations' });
        } else if (score >= 65 && score <= 79) {
            setGrade({ status: "Very Good", gradeGot: 2, color: 'gold', text: 'Congratulations' });
        } else if (score >= 80 && score <= 100) {
            setGrade({ status: "Outstanding", gradeGot: 1, color: 'green', text: 'Congratulations' });
        } else {
            setGrade({ status: "Invalid score", gradeGot: 0, color: 'red', text: 'Better luck next time.' });
        }
    }

    return (
        <div className='ResultContainer gap-3'>
            <div className='col-md-10'>
                <Table />
                <div className='d-flex flex-row gap-5'>
                    <div className='col-md-12'>
                        <table className="table" style={{ border: "1px solid rgba(128, 128, 128, 0.305)" }}>
                            <thead>
                                <tr className="table-light">
                                    {tableHead.map((head, index) => (
                                        <th key={index}>{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Grades.map(row => (
                                    <tr key={row.Grade}>
                                        <td>{row.Grade}</td>
                                        <td>{row.Score}</td>
                                        <td>{row.Status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='ResultCard col-md-2 overflow-hidden' style={{ border: "1px solid #088383", position: 'relative' }}>
                <h3 className='text-center text-uppercase fs-5 fw-semibold pt-3'>Score Card</h3>
                <div className='h-100 bg-light' style={{ borderTop: '2px solid rgba(128, 128, 128, 0.305)' }}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png" alt='image-trophy' className='imageTrophy text-center' height="50px" />
                    </div>
                    <div className='text-center'>
                        <h5 className='fw-bold' style={{ fontFamily: 'Roboto , Sans Serif', marginTop: '-20px', color: "#088383" }}>Your Results</h5>
                        <h3 className='' style={{ color: '#00AAFF', fontSize: '25px' }}>{grade.text}</h3>
                        <p className='text-uppercase fw-bolder' style={{ fontSize: '15px', color: `${grade.color}` }}  >{grade.status}</p>
                    </div>
                    <div className='Certificate d-flex flex-column mt-4 col-11 m-auto'>
                        {(grade.gradeGot <= 3 && grade.gradeGot > 0) ? <ImageDownload grade={grade} /> : <div className='text-center' style={{ fontSize: '12px' }} > Score Good to get Certificate ! </div>}
                        {/* <ImageDownload /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
