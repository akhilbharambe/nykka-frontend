import * as React from "react";

function Logo(props) {
  return (
    <>
      <div className="div">Nyka Dashboard</div>
      <style jsx>{`
        .div {
          color: #013cc6;
          max-width: 198px;
          font: 500 24px Poppins, sans-serif;
          margin-top : 2%
        }
      `}</style>
    </>
  );
}



export default Logo;