import "./LoadingSpinner.css";
import React from "react";

const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <div className="main-body">
        <b>{props.message}</b>  
        {/* 
        default {props.message || "Loading..}"
        */}
        <br></br>
        <div className="spinner-icon">
          <i class="notched circle loading icon"></i>{" "}
        </div>
      </div>
    </div>
  );
};

// uso invece i defaultProps

LoadingSpinner.defaultProps = {
    message: 'Loading...'
};

export default LoadingSpinner;
