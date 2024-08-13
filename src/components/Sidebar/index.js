import { FaWpforms } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");  // Image URL state
  const [personName, setPersonName] = useState("");  // Person's name state

  useEffect(() => {
    const isProfileImageFetched = JSON.parse(localStorage.getItem("profileImageFetched"));

    if (!isProfileImageFetched) {
      const fetchProfileImage = async () => {
        let valueEmail = JSON.parse(localStorage.getItem("email"));
        const token = JSON.parse(localStorage.getItem(valueEmail));

        if (token) {
          const profileUrl = `https://profile-backend-4.onrender.com/exam_profile/image/${valueEmail}`;
          try {
            const res = await axios.get(profileUrl);
            
            setPersonName(res.data.profile.personal.firstName);

            const imageUrl = `https://profile-backend-4.onrender.com${res.data.profile.personal.photoPreview}`;
            setUrl(imageUrl);

            // Store the profile image URL in localStorage
            localStorage.setItem("profileImageURL", JSON.stringify(imageUrl));
            // Mark profile image as fetched in localStorage
            localStorage.setItem("profileImageFetched", JSON.stringify(true));
          } catch (error) {
            console.error("Error fetching profile image:", error);
          }
        }
      };
      fetchProfileImage();
    } else {
      // Use the stored image URL if already fetched
      const storedImageURL = JSON.parse(localStorage.getItem("profileImageURL"));
      if (storedImageURL) {
        setUrl(storedImageURL);
      }
    }
  }, []);

  return (
    <aside id="sidebar" className="sidebar">
      <div className="logo-img d-flex flex-column align-items-center mb-3">
        {url ? <img src={url} alt="Profile" /> : <IoPerson className="fs-1" />}
        {personName && <h5 className="mt-3">{personName}</h5>}
      </div>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item" onClick={() => navigate("/dashboard")}>
          <span className="nav-link collapsed">
            <FaWpforms className="i" />
            <span className="">Dashboard</span>
          </span>
        </li>

        <li
          style={{ color: "black", textDecoration: "none" }}
          onClick={() => navigate("/profile")}
          className="nav-item"
        >
          <span className="nav-link collapsed">
            <FaWpforms className="i" />
            <span className="">User Profile</span>
          </span>
        </li>

                <li className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Results</span>
                    </span>
                </li>

                <li className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Practice</span>
                    </span>
                </li>

                <li className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Invite Friends</span>
                    </span>
                </li>
            </ul>
        </aside>
    );
};
