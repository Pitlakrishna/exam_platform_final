import React, { useContext, useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { FaStar } from "react-icons/fa";
import "./Certificate.css";


const Certificate = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState("")
    const certificateRef = useRef(null);
    // const { gradeScore } = useContext(markContext)
    useEffect(() => {

        let userName = JSON.parse(localStorage.getItem("user"))
        console.log(userName);
        // setName(userName.details.username)
        setName(userName);
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
    };

    return (
        <div className='MainContainer'>
            <div className='Stars'>
                <h1><FaStar className='text-danger ' /></h1>
            </div>
            <div className='imageContainer' ref={certificateRef}>
                <h1 className='studentName'>{name}</h1>
                <h3 className='ExamName'>{category}</h3>
            </div>
            <button className='btn btn-primary' onClick={handleDownload} style={{ marginTop: '10px' }}>Download Certificate</button>
        </div>
    );
};

export default Certificate;