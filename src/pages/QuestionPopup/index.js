import React, { useState } from "react";
import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Loader from "../../components/Loader";



export const QuestionPopup = () => {

    const [answer, setAnswer] = useState("");
    const [isError, setIsError] = useState({ msg: '', status: false });
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();

    const onChangeAnswer = (e) => {
        const inputText = e.target.value;
        const numberOfWords = inputText.trim().split(/\s+/).filter(Boolean).length;
        if (numberOfWords <= 300) {
            setAnswer(inputText);
            setIsError({ status: false, msg: '' });
        } else {
            setIsError({ status: true, msg: 'Maximum limit of words is exceeded....' });
        }
    };


    const handleLiveResult = () => {
        try {
            if (answer !== "") {
                setLoader(true)
                setTimeout(() => {
                    setLoader(false)
                    navigate('/feedback')
                }, 2000)
            } else {
                setIsError({ status: true, msg: 'Answer cannot be empty, please enter your answer.' });
            }
        } catch (error) {
            setLoader(true)
            console.log(error)
        }
    }


    // submit Button
    const submitHandler = () => {
        try {
            if (answer !== "") {
                // setIsPopupOpen(true)
                navigate('/feedback')

            } else {
                setIsError({ status: true, msg: 'Answer cannot be empty, please enter your answer.' });
                // alert("Answer cannot be empty, please enter your answer.")
            }

        } catch (error) {
            console.log(error)
        }
    }


    const onClickClearAll = () => {
        setAnswer("");

        setIsError({ status: false });
    };

    return (
        loader ? <Loader /> : <div className="containerMain" >
            <div className="SectionCard" >
                <section className="text-center">
                    <h3 className="text-center mb-3" >General Round</h3 >
                    <div className="align-self-center mt-5" >
                        <p>Please <span className="text-primary" >Click</span> the below button to attend the Section-2 General Question.</p>
                    </div>
                </section>
                <div className=" popupBtn d-flex justify-content-center" >
                    <Popup
                        trigger={
                            <button className=" btn btn-outline-primary">Attempt General Question</button>
                        }
                        modal
                        closeOnDocumentClick={false}
                        contentStyle={{
                            width: "1150px",
                            borderRadius: "10px",
                            padding: "0px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                    >
                        <div className="modal-content"
                            style={{ border: "1px solid red" }}
                        >
                            <h1 className="question_heading fs-5 float-left">
                                Describe about your favourite politician/actor/person/any topic in a
                                few words...
                            </h1>
                            <textarea
                                placeholder="Enter your views here in 300 words...."
                                value={answer}
                                onChange={onChangeAnswer}
                                style={{ fontSize: '16px' }}
                            ></textarea>
                            {
                                isError?.status && (
                                    <p style={{ color: "red", margin: "10px", fontSize: '15px' }}>
                                        {isError?.msg}
                                    </p>
                                )}
                            <div className="buttons_container">
                                <button
                                    type="button"
                                    className="clear_all_button"
                                    onClick={onClickClearAll}
                                >
                                    Clear All
                                </button>
                                <button className="btn btn-lg btn-success fs-6" onClick={submitHandler}
                                // onClick={()=>useNavigate('/feedback')}
                                >Submit</button>
                                {/* {isPopupOpen &&
                                    <Popup
                                        open={isPopupOpen}
                                        // trigger={<button className="btn btn-lg btn-success fs-6" onClick={submitHandler}   >Submit</button>}
                                        modal
                                        closeOnDocumentClick={false}
                                        contentStyle={{
                                            width: "800px",
                                            borderRadius: "10px",
                                        }}
                                        overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                                        onClose={() => setIsPopupOpen(false)}
                                    >
                                        {close => (
                                            <>
                                                <button
                                                    onClick={close}
                                                    position="top right"
                                                    style={{ border: 'none', backgroundColor: 'transparent', padding: '0 20px', fontSize: '30px' }}
                                                >&times;</button>
                                                <div
                                                    style={{
                                                        padding: "20px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <h1 className="submitted_heading">Submitted!</h1>
                                                    <p style={{ fontSize: "20px", }}>
                                                        Thank you!...Your test is being submitted. Please wait for
                                                        live results
                                                    </p>
                                                    <button type="button" onClick={handleLiveResult} className="btn btn-primary">Live Results</button>
                                                </div>
                                            </>
                                        )}
                                    </Popup>} */}
                            </div>
                        </div>
                    </Popup >
                </div>
            </div>
        </div >

    );
};

