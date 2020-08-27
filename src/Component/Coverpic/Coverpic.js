import React from 'react';
import './Coverpic.css';



const Coverpic = (props) => {
    const {img} = props.covers;
    

    var Img ={
        display:"block",
        width:"100%", height:"100%",
        
      }

    return (
        <div className="backgroundSection">
            <div className="image">
                    <img styles={Img} src={img} alt="none"/>
            </div>
            <div className="rightbackground">
                <h3>Only at DA-Learning: <strong>Job-Ready Skills</strong></h3>
                <p>Learn by doing</p>
                <p>Practitioner-level skills</p>
                <p>Job-focused content</p>
                <p>Real human help</p>
                <p>Personalized code reviews</p>
                <p>Real-life projects</p>
                



                <p className="rightPera">Udacity is the world’s fastest, most efficient way to master the skills tech companies want. 100% online, part-time & self-paced.reprehenderit architecto repellendus nobis assumenda fugit. Aspernatur?</p>
            </div>
        </div>
    );
};

export default Coverpic;