import React from 'react';
import './PopulerTeacher.css';

const PopulerTeacher = (props) => {
    
    return (
        <div className="populersection mt-4">
            <h5> <b>Name:</b> {props.name}</h5>
            <img src={props.image} alt=""/>
            <h5> <strong>Email:</strong> {props.email}</h5>
            <h6> <strong>Coupun Code:</strong> {props.course_key}</h6>
        </div>
    );
};

export default PopulerTeacher;