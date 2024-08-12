
import React, { useState } from "react";
import "./DownloadCertificate.css"
import { useNavigate } from "react-router-dom";


function ImageDownload(grade) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleDownload = async () => {
        try {
            navigate("/certificate")
            localStorage.setItem("grade", JSON.stringify(grade))
            console.log(grade)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <button className="downloadImage" onClick={handleDownload} disabled={loading} >
                {loading ? "Download..." : "Get Certificate"}
            </button>
            {error && <p className="text-center" style={{ color: 'red' }} >{error}</p>}
        </div>
    )

}

export default ImageDownload;