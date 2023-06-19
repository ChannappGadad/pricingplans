import React from "react";
import {FaCheck, FaTimes} from 'react-icons/fa';
import "../TickMarks/TickMarks.css";

const TickMarks = (props) => {

    return(
        <div>
            <h4>
                {props.name}
            </h4>
            <div className="checkedItems">
                {props.check1 ? <FaCheck/> : <FaTimes/>}
                {props.check2 ? <FaCheck/> : <FaTimes/>}
                {props.check3 ? <FaCheck/> : <FaTimes/>}
                {props.check4 ? <FaCheck/> : <FaTimes/>}
                {props.check5 ? <FaCheck/> : <FaTimes/>}
            </div>
        </div>
    )
}

export default TickMarks;