import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <span>DA Learing</span>
            </div>
            <div className="nav">
                <ul>
                    <li> <a href="#Home">Home</a> </li>
                    <li> <a href="#Latest">Latest</a> </li>
                    <li> <a href="#Populer">Populer</a> </li>
                    <li> <a href="#Join Now">Join Now</a> </li>
                </ul>
            </div>
            <div className= "ml-4 ">
                <button className='ml-4 btn btn-success'>Get started</button>
            </div>
        </div>
    );
};

export default Header;