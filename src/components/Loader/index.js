import React from 'react'
import { DotLoader } from "react-spinners"

const Loader = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: "50%",
                left: '50%',
                transform: "translate(-50% , -50%)",
                backgroundColor: '#F0F4F9',
                height: '100vh',
                width: "100vw",
                display: "flex", alignItems: 'center', justifyContent: 'center'
            }}
        >
            <DotLoader
                size={100}
                color='#5bf5d7'
                speedMultiplier={1.2}
            />
        </div>
    )
}

export default Loader