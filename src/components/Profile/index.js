import React, { useState } from "react";
import "./index.css";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import ProfessionalDetails from "../ProfessionalDetails";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {

  const [showModal, setShowModal] = useState(false);
  const [education, setEducation] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    location: "",
    email: "",
    photo: null,
    photoPreview: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Temporary storage for the selected photo
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState(""); // Temporary storage for the pr

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const setEducationFunction = (lst) => {
    setEducation(lst);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!profileData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      newErrors.email = "Email Address is invalid";
    }
    if (!profileData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\+?\d{10,13}$/.test(profileData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number is invalid";
    }
    if (!profileData.location.trim()) {
      newErrors.location = "Current Location is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onClickSavePersonalData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setPersonalDetails({ ...personalDetails, profileData });

      
      toast.success("Profile Details saved to Database!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });


    }
  };

  const uploadPhoto = async (photo) => {
    const formData = new FormData();
    formData.append("photo", photo);

    try {
      const url = "http://localhost:3000/exam_profile/upload_photo";
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        return response.data.imagePath; // Assuming the response contains imagePath
      } else {
        console.error("Unexpected response status:", response.status);
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Response Data:", error.response.data);
        console.error("Status Code:", error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Request Data:", error.request);
      } else {
        // Something else caused the error
        console.error("Error Message:", error.message);
      }
      throw new Error("Failed to upload image");
    }
  };

  const onClickProfileSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let photoPath = profileData.photoPreview;

    if (selectedPhoto) {
      try {
        photoPath = await uploadPhoto(selectedPhoto);
      } catch (error) {
        alert("Failed to upload photo. Please try again.");
        return;
      }
    }

    let reqBody = {
      personal: {
        ...profileData,
        photoPreview: photoPath,
      },
    };

    const filterOutKey = (obj, keyToFilter) => {
      return Object.keys(obj).reduce((acc, key) => {
        if (key !== keyToFilter) {
          acc[key] = obj[key];
        }
        return acc;
      }, {});
    };

    reqBody = {
      personal: filterOutKey(personalDetails.profileData, "photo"),
      education,
    };

    try {
      const url = "http://localhost:3000/exam_profile/profile";
      const response = await axios.post(url, reqBody);

      if (response.status === 200) {
        alert("Profile Details saved to Database");
        setProfileData({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          location: "",
          email: "",
          photo: null,
          photoPreview: "",
        });
      }
    } catch (error) {
      console.error("Error response:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "An error occurred"}`);
      } else {
        alert(
          "An error occurred while setting up the request. Please try again."
        );
      }
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setSelectedPhoto(file);
      setSelectedPhotoPreview(filePreview);
    }
  };

  const handlePhotoUpload = () => {
    // Update the profileData with the selected photo and preview
    setProfileData({
      ...profileData,
      photo: selectedPhoto,
      photoPreview: selectedPhotoPreview,
    });

    handleClose(); // Close the modal after uploading
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#ffffff",
          paddingTop: "20px",
        }}
      >
        <form className="profile_background_color">
          <div className="section_1">
            <h1 className="create_student_profile_h1">
              Create Student Profile
            </h1>
            <p className="existing_para">
              Existing Student? <span>Login in</span>
            </p>
          </div>
          <div className="section_2_3">
            <form className="section_2">
              <h1 className="personal_details_h1">Personal Details</h1>
              <div className="profile_first_lastname_container">
                <button
                  type="button"
                  className="profile_button"
                  onClick={handleShow}
                >
                  {profileData.photoPreview ? (
                    <img
                      src={profileData.photoPreview}
                      alt="Profile Preview"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                      className="profile_preview_img"
                    />
                  ) : (
                    <span className="span_container">
                      <CgProfile className="profile_icon" size={25} />

                      <FiEdit className="edit_icon" size={17} />
                    </span>
                  )}
                </button>
                {showModal && (
                  <div className="modal_bg_container">
                    <div data-aos="slide-down" className="modal_content">
                      <div className="heading_close_container">
                        <h1 className="upload_photo_h1">
                          Upload your photograph
                        </h1>
                        <IoCloseSharp
                          size={25}
                          className="close_icon"
                          onClick={handleClose}
                        />
                      </div>
                      <div className="modal_content_mid_container">
                        <input
                          type="file"
                          accept="image/*"
                          className="file_input text-center"
                          onChange={handlePhotoChange}
                        />
                        <button
                          type="button"
                          className="upload_button"
                          onClick={handlePhotoUpload}
                        >
                          Upload
                        </button>
                      </div>
                      <p className="modal_para">
                        By uploading this image you certify that this is your
                        photograph and you have the right to distribute this
                        image and this is in accordance with Monster Guidelines.
                      </p>
                      <ul className="profile_instructions_container">
                        <li>Max file upload size: 4 MB.</li>
                        <li>
                          You can upload picture in ".jpg, .jpeg, .png" formats.
                        </li>
                        <li>
                          Upload latest clear individual images only. Group
                          images will get rejected during moderation
                        </li>
                        <li>
                          Images that could be perceived as violent, including
                          hatred or cruelty to humans or animals, profanity, or
                          obscenities will be rejected
                        </li>
                        <li>Images of celebrities will be rejected</li>
                        <li>
                          On the prior consent of the recruiter, job seekers can
                          access recruiter profiles. Monster is not responsible
                          for any dissemination of information including
                          uploaded photograph outside its purview
                        </li>
                        <li>
                          Images demonstrating inappropriate or junk content
                          will be rejected
                        </li>
                        <li>
                          The profile owner is responsible for the accuracy and
                          reliability of any information uploaded. Exceptions to
                          this include fraudulent information of any kind on the
                          website should be reported by users to Monster website
                          authorities
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="firstname_lastname_wrapper">
                  <div className="label_input_container">
                    <label htmlFor="firstname" className="form-label">
                      First Name<sup style={{ color: "red" }}>*</sup>
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      required
                      placeholder="First Name"
                      className="name_input form-control"
                      onChange={handleInputChange}
                      name="firstName"
                      value={profileData.firstName}
                    />
                    {errors.firstName && (
                      <span
                        className="error_message"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="label_input_container">
                    <label htmlFor="lasttname" className="form-label">Last Name</label>
                    <input
                      id="lasttname"
                      type="text"
                      required
                      placeholder="Last Name"
                      className="name_input form-control"
                      onChange={handleInputChange}
                      name="lastName"
                      value={profileData.lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="email_address_container">
                <label htmlFor="email" className="form-label">
                  Email Address<sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  id="email"
                  type="text"
                  // style={{ width: "80%" }}
                  placeholder="Email Adress"
                  onChange={handleInputChange}
                  className="email_input form-control"
                  name="email"
                  required
                  value={profileData.email}
                />
                {errors.email && (
                  <span
                    className="error_message"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="mobile_number_wrapper email_address_container mt-3">
                <label htmlFor="mobile_number" className="form-label">
                  Mobile Number<sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  id="mobile_number"
                  type="text"
                  placeholder="Enter mobile number with country code"
                  className="email_input form-control"
                  name="mobileNumber"
                  required
                  onChange={handleInputChange}
                  value={profileData.mobileNumber}
                />
                {errors.mobileNumber && (
                  <span
                    className="error_message"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errors.mobileNumber}
                  </span>
                )}
              </div>
              <div className="location_wrapper email_address_container mt-3">
                <label htmlFor="location" className="form-label">
                  Current Location<sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  placeholder="Enter your location"
                  className="email_input form-control"
                  name="location"
                  onChange={handleInputChange}
                  value={profileData.location}
                />
                {errors.location && (
                  <span
                    className="error_message"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errors.location}
                  </span>
                )}
              </div>

              <div className="personal_details_save_btn_wrapper">
                <button
                  type="submit"
                  className="personal_details_save_btn"
                  style={{ backgroundColor: "#6E00BE" }}
                  onClick={onClickSavePersonalData}
                >
                  Save
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition="Bounce"
                />
                {/* Same as */}
                <ToastContainer />
              </div>
            </form>

            <div className="section_3">
              <ProfessionalDetails
                setEducationFunction={setEducationFunction}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={onClickProfileSubmit}
          >
            <button type="submit" className="submit_button mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;