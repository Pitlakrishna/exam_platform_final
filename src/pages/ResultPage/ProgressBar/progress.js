import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CustomText = ({ lines }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }}>
      <div className=' ' style={{}}>
        <p className='my-4' style={{ color: '#00aaff', fontSize: '40px', fontWeight: 'bold' }}>{lines[0]}</p>
        <p style={{ color: 'gray', fontSize: '15px', fontWeight: 'bold' }}>{lines[1]}</p>
        <p style={{ color: 'gray', fontSize: '15px', fontWeight: 'bold' }}>{lines[2]}</p>
      </div>

    </div>
  );
};






const CircularProgress = ({ value, maxValue, radius, customTextLines }) => {
  const size = radius * 2
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        styles={buildStyles({
          textColor: '#f88',
          pathColor: '#00aaff',
          trailColor: '#f08080',
          textSize: "16px",
          pathTransitionDuration: 0.5,

          trailwidth: 10,
          pathwidth: 10
        })}
      />
      <CustomText lines={customTextLines} />
    </div>
  );
};

export default CircularProgress;