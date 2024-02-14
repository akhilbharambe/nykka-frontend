import * as React from "react";
import { useNavigate } from "react-router-dom"; ; // Import useHistory hook from react-router-dom

function SideBar(props) {
  const navigate = useNavigate(); // Initialize history object

  const handleLogout = () => {
    // Handle logout action
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <>
      <div className="div">
        {/* Sidebar content */}
        <div className="div-2" > {/* Add onClick event handler */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c5b697cff3442e0b525c0ff20165bdca0ff172b0ac2c76b77898c746df34b6e?"
            className="img"
          />
          <div className="div-3">Dashboard</div>
        </div>
        <div className="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ec408c0ed28c54cbe9203116c14ce3334e8434ae46d85d12e278a62ba481f1?"
            className="img"
          />
          <div className="div-5">Analytics</div>
        </div>
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19940b9f9a25c1b24cd4248cd2345f1f18236232be82caa394b7ba6bd04afde2?"
            className="img"
          />
          <div className="div-7" onClick={handleLogout}>Logout</div>
        </div>
      </div>
      <style jsx>{`.div {
          display: flex;
          max-width: 131px;
          flex-direction: column;
          font-size: 16px;
          font-weight: 400;
          white-space: nowrap;
          letter-spacing: 0.32px;
        }
        .div-2 {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #0b63f8;
          padding: 0 20px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-3 {
          font-family: Poppins, sans-serif;
          margin: auto 0;
        }
        .div-4 {
          display: flex;
          margin-top: 41px;
          justify-content: space-between;
          gap: 16px;
          color: #000;
          padding: 0 20px;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
        }
        .div-6 {
          display: flex;
          margin-top: 41px;
          justify-content: space-between;
          gap: 16px;
          color: #131313;
          padding: 0 20px;
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          cursor : pointer;
        }`}</style>
    </>
  );
}

export default SideBar;
