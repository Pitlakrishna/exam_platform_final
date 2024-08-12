import { useNavigate } from "react-router-dom"
import { examCardsData } from "../../data"
import './index.scss'

export const ListofExams = () => {
    const navigate = useNavigate();

    const HandleSubmit = async (value) => {
        try {
            localStorage.setItem("category", JSON.stringify(value))
            navigate("/instructions")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="d-flex flex-column align-items-center gap-3 p-5" style={{ overflow: "scroll", scrollbarWidth: "none " }}>
                    <h3 className="mb-5" style={{ color: "#013246" }}>List of Exams</h3>
                    <div className="d-flex flex-row justify-content-center flex-wrap gap-4" style={{ width: "100%" }}>
                        {examCardsData.map((each, i) => (
                            <div className="card d-flex flex-column p-2 gap-2 text-center " key={i}
                                onClick={(event) => HandleSubmit(each.title)}
                                style={{
                                    width: "250px", height: '140px', borderRadius: "20px",
                                    // boxShadow: "0 0 10px 0 rgba(0, 0, 0, .08)"
                                }}>
                                <img src={each.img} alt="react" style={{ width: "33%", margin: 'auto' }} />
                                <h4 className="text text-uppercase " style={{ fontWeight: '600', fontSize: '14px' }} >{each.title}</h4>
                            </div>
                        ))
                        }
                    </div>
                </div>
    )
}