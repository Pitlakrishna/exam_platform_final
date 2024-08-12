import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const PersonalDetails = () => {
    const navigate = useNavigate();
    const [personalDetails, setPersonalDetails] = useState({
        first_name : '',
        last_name : '',
        phone_number : '',
        dob : '',
        current_address : '',
    })

    const onHandleChange = (e) => {
        setPersonalDetails((prev) => ({
            ...prev, [e.target.name] : e.target.value
        }))
    }

    const onPersonalDetailsSubmit = (e) => {
        e.preventDefault();
        console.log(personalDetails);
        navigate("/education");
    }
    return(
        <div className="personal-details container">
            <form onSubmit={onPersonalDetailsSubmit}>
                <h1 className="">Personal Details</h1>
                <hr className="mb-5"/>
                <div className="mb-3">
                    <label className="form-label col-sm-2 col-md-3">First Name</label>
                    <input type="text" name="first_name" className="form-control col-sm-10 col-md-9" onChange={onHandleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label col-sm-2 col-md-3">Last Name</label>
                    <input type="text" name="last_name" className="form-control col-sm-10 col-md-9" onChange={onHandleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label col-sm-2 col-md-3">Phone Number</label>
                    <input type="number" name="phone_number" className="form-control col-sm-10 col-md-9" onChange={onHandleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label col-sm-2 col-md-3">Date of Birth</label>
                    <input type="date" name="dob" className="form-control col-sm-10 col-md-9" onChange={onHandleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label col-sm-2 col-md-3">Current Address</label>
                    <input type="text" name="current_address" className="form-control col-sm-10 col-md-9" onChange={onHandleChange} required/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </form>
        </div>
    )
}