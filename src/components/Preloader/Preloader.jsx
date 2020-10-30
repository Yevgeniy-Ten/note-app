import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Preloader = ({isLoad}) => (
    isLoad ? <div className="preloader-bg">
        <Spinner animation="border" variant="success"/>
    </div> : null
)
export default Preloader