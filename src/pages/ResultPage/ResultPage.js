import React from 'react';
import Table from "./ResultTable/Table"
import "./index.css"
import ImageDownload from './DownloadCertificate/DownloadCerticate';
// import Certificate from './PreviewCertificate/Certificate.js';


const ResultPage = () => {
    const tableHead = ["Grade", "%Marks", "Interpretation"]
    const Grades = [
        { Grade: 1, Score: "0-39", Status: "Fail" },
        { Grade: 2, Score: "40-49", Status: "Satisfactory" },
        { Grade: 3, Score: "50-64", Status: "Good" },
        { Grade: 4, Score: "65-79", Status: "Best" },
        { Grade: 5, Score: "80-100", Status: "Excellent" }
    ];

    return (
        <div className='ResultContainer gap-3 '>
            <div className='col-md-10' >
                <Table />
                <div className='d-flex flex-row gap-5 ' >
                    <div className='col-md-12' >
                        <table className="table " style={{ border: "1px solid rgba(128, 128, 128, 0.305)" }} >
                            <thead>
                                <tr className="table-light" >
                                    {tableHead.map(head => (
                                        <th >{head}</th>
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

            <div className='ResultCard col-md-2 overflow-hidden' style={{ border: "1px solid #088383", position: 'relative' }}  >
                <h3 className='text-center text-uppercase fs-5 fw-semibold pt-3'   >Score Card</h3>
                <div className='h-100 bg-light' style={{ borderTop: '2px solid rgba(128, 128, 128, 0.305)' }}  >
                    <div className='d-flex justify-content-center align-items-center' >
                        <img src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png" alt='image-tropy' className='imageTrophy text-center' height="50px" />
                    </div>
                    <div className='text-center' >
                        <h5 className=' fw-bold' style={{ fontFamily: 'Roboto , Sans Serif', marginTop: '-20px', color: "#088383" }}  >Your Results</h5>
                        <h3 className='' style={{ color: '#00AAFF' }} >Congratulations</h3>
                        <p>You got 1st rank</p>
                    </div>
                    <div className='Certificate d-flex flex-column mt-5 col-11 m-auto ' >
                        <ImageDownload />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ResultPage;