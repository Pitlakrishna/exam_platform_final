import React, { useContext, useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { FaStar } from "react-icons/fa";
import "./Certificate.css";


const Certificate = () => {
    const [name, setName] = useState('')
    const [grade, setGrade] = useState(null)
    const [category, setCategory] = useState("")
    const certificateRef = useRef(null);

    // const { gradeScore } = useContext(markContext)
    useEffect(() => {
        let userName = JSON.parse(localStorage.getItem("user"))
        console.log(userName);
        // setName(userName.details.username)
        setName(userName);
        setGrade(JSON.parse(localStorage.getItem("grade")).grade.gradeGot)
        // console.log(grade);
        setCategory(JSON.parse(localStorage.getItem("category")))

    }, [])

    const handleDownload = () => {
        if (certificateRef.current === null) {
            return;
        }

        toPng(certificateRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'certificate.png';
                link.click();
            })
            .catch((err) => {
                console.error('Could not generate image', err);
            });
        console.log(localStorage.getItem("grade"));
        const valueGrade = JSON.parse(localStorage.getItem("grade"))
        setGrade(valueGrade)
    };

    return (
        <div className='MainContainer'>

            <div className='imageContainer' ref={certificateRef}>
                <div className={`Stars${JSON.parse(localStorage.getItem("grade")).grade.gradeGot}`}>
                    {/* <h1><FaStar className='mt-1' /></h1> */}
                    {JSON.parse(localStorage.getItem("grade")).grade.gradeGot === 1 && <h1><FaStar className='mt-1' /></h1>}
                    {JSON.parse(localStorage.getItem("grade")).grade.gradeGot === 2 && <h1><FaStar /><FaStar /></h1>}
                    {JSON.parse(localStorage.getItem("grade")).grade.gradeGot === 3 && <h1><FaStar className='mb-1' style={{ fontSize: '18px', color: 'white' }} /><FaStar className='mt-1' /><FaStar className='mb-1' style={{ fontSize: '18px', color: 'white' }} /> </h1>}

                </div>
                <h1 className='studentName'>{name}</h1>
                <h3 className='ExamName'>{category}</h3>
            </div>
            <button className='btn btn-primary' onClick={handleDownload} style={{ marginTop: '10px' }}>Download Certificate</button>
        </div>
    );
};

export default Certificate;