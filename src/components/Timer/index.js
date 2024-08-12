import React, { useEffect } from 'react';

export const Timer = ({ timeLeft, setTimeLeft, handleTimeUp }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
    else {
      handleTimeUp()
    }
  }, [timeLeft, setTimeLeft, handleTimeUp]);

  return (
    // <div className='d-flex flex-column gap-3 align-items-center'>
    //   {/* <p style={{marginBottom:"20px"}}>Time left for current question</p> */}
    //   <span className='d-flex bg-light flex-column justify-content-center align-items-center time' style={{ borderTop: '2px solid #8a94df', marginBottom: '100px', height: "95px", width: "95px", borderRadius: "50%", backgroundColor: "white", position: "absolute" }}>
    //     <span className='' style={{ fontSize: "12px", fontWeight: "600" }}>Time Left</span>
    //     <span>{timeLeft}s</span>
    //   </span>
    // </div>
    <div>
      <span className=' d-flex flex-row justify-content-end align-items-end time gap-2 my-3'
        style={{ height: "70px", position: "absolute" }}>
        <span className='' style={{ fontSize: "15px", fontWeight: "600" }}>Time Left</span>
        <span className='fs-6 text-danger' >{timeLeft}s</span>
      </span>
    </div>
  );
};

