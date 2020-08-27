import React from 'react';
import './Course.css';

const Course = ( props ) => {
    const{ img, name, price ,title} = props.courses;
    // console.log(props);
    return (
        <div>
  
            <div className="course-details m-4">
            
                <div className="image">
                    <img src={img} alt="none"/>
                </div>
                <div className="details">
                    <p> <strong>Course Name:</strong> {name}</p>
                    <p> <strong>Title:</strong> {title}</p>
                    <p><strong>price</strong>: {price}</p>
                    <button 
                        // onClick = {() => props.handleAddEvent(props.product)}
                        className="main-button" 
                        onClick={() => props.evendHandlerAdd(props.courses)}
                        >
                            {/* <FontAwesomeIcon icon={faShoppingCart} />  */}
                            Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;