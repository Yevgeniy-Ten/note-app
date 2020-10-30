import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Preloader = ({isLoad, type}) => (
    isLoad ? <div className="preloader-bg">
        <Spinner animation="border" variant={type}/>
    </div> : null
)
export default Preloader