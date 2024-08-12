import { useNavigate } from "react-router-dom"


export const FeedBackPage = () => {

    const navigate = useNavigate()
    return (
        <div className="d-flex flex-column align-items-center justify-content-center bg-light" style={{ width: "100vw", height: "100vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center " style={{ width: "60%", height: "60%", border: "none", borderRadius: "30px", backgroundColor: "white", overflow: 'hidden' }}>
                <div className="d-flex flex-column text-center align-items-center mt-5" style={{ width: "100%", height: "100%", position: "relative", marginBottom: "220px" }}>
                    <img src="https://i.gifer.com/7efs.gif" alt="tick" style={{}} />
                    <div className="d-flex flex-column gap-1" style={{ position: "absolute", bottom: "-80px" }}>
                        <h1  >Submitted Successfully..!</h1>
                        <span>Thank you!... your test is being submitted.</span>
                        <span>check here for live results</span>
                        <button className="btn btn-primary liveResultBtn "
                            style={{ width: "200px", margin: 'auto', marginTop: '20px' }}
                            onClick={() => navigate('/result')}
                        >
                            Live Results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}