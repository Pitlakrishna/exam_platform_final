import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./index.scss"
import { ControlledContext } from "../../context/controlledContext";

export const Instructions = () => {

  const [checked, setCheked] = useState(false);

  const navigate = useNavigate()
  const { dispatch } = useContext(ControlledContext)
  const handleFullScreen = async () => {
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        await elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        await elem.msRequestFullscreen();
      }
      dispatch({ type: 'fullScreen' });
    } catch (err) {
      console.error('Error attempting to enable fullscreen mode:', err);
    }
  };

  const onStartClick = async () => {
    const size = window.innerWidth;
    // console.log(size);
    if(size < 770){
      alert("not supported for mobile. use laptop or desktop to continue the exam")
    }
    else{
      await handleFullScreen()
      navigate("/exam")
    }
  }

  return (
    <div className="instructions d-flex flex-row justify-content-center align-items-center" style={{ width: "100vw", height: "100vh"}}>
      <div className="p-5 bg-light d-flex flex-column gap-2" style={{ width: "fit-content", borderRadius: "10px" }}>
        <h5>Instructions:</h5>
        <p><b>a.</b> This assessment contains two sections :  1.Technical Round and  2.General Round</p>
        <ol className="d-flex flex-column gap-2 " style={{ marginTop: '-15px' }} >
          <li>
            <h6>Technical Round </h6>
            <ul>
              <li>Number of Questions: <span>20</span></li>
              <li>Types of Questions: <span>MCQs</span></li>
              <li>Marking Scheme: <span>All questions have equal weightage. Every correct response gets +5 marks.</span></li>
              <li>Negative Marking: <span>For each incorrect answer, 1 mark will be deducted. No negative marks in case marking in case of unattempted question</span></li>
              <li>The questions in the practice set will keeep repeating until you answer all the questions correctly</li>
            </ul>
          </li>
          <li>
            <h6>General Round </h6>
            <ul>
              <li>
                <li>This section contains only <b className="text-uppercase" >one</b> general question .</li>
                <li>It doesn't have time limit to complete the Exam.</li>
              </li>
            </ul>
          </li>
        </ol>
        <div style={{ lineHeight: '15px' }} >
          <p><b>b. </b> This assessment manitored by micro-phone and webCam . Please allow all the permissions.</p>
          <p><b>c. </b> Please don't try to switch between the tabs / windows after starting assessment , that leads to terminate the assessment.  </p>
          <p ><b>d. </b> <span className="text-danger fs-4 pe-2 mt-5" >*</span>Both Sections are mandatory to Successfully submit the assessment.</p>
        </div>
        <div className="custom-checkbox d-flex flex-row gap-2 ">
          <input type="checkbox" id="check" onClick={() => setCheked(!checked)} />
          <label className="mt-2" htmlFor="check" >I have read the instructions and i agree with all the terms and conditions</label>
        </div>
        <div className="d-flex flex-row justify-content-center ">
          {/* cursor: !checked ? "not-allowed" : "pointer" */}
          <button disabled={!checked} className="mt-4 text-light buttonStartExam" type="button" onClick={onStartClick}
            style={{ border: '1px solid #AEAEAE', backgroundColor: "#013246", curser: !checked ? "not-allowed" : "pointer" }}>Start Exam</button>
        </div>
      </div>
    </div >
  )
}