import * as React from "react";

function Header(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11409849ac006ed6f9e5b1c2f8f7e4774aac40768f61b429a0785a7d42b8aa70?"
              className="img"
            />
            <div className="div-4">Search</div>
          </div>
        </div>
        <div className="div-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be38cb3e460c297367726c8e36d2a5318375b616bca5009ccfacf1c02582c9f?"
            className="img-2"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="img-3"
          />
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 16px;
          color: #ada7a7;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-3 {
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-4 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 52px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 52px;
        }
      `}</style>
    </>
  );
}
export default Header;

