import React, {useState , useEffect } from 'react';
import Course from '../Course/Course';
import foods from '../../fakeData/food';
import './Learning.css';
import PopulerTeacher from '../PopulerTeacher/PopulerTeacher';
import Cart from '../Cart/Cart';


const Learning = () => {
    const fake20 = foods.slice(0,15);
    // const fake20 = fakeData.slice(0,1);
    const [courses, setCourses] = useState(fake20);
    // alert(courses.length)
    const [ user, setUser ] = useState([])
    useEffect( ()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then( res => res.json())
        .then( data => {
            setUser(data.results);
            data = data.results;
            const name = data.map( user => ` ${user.name.title} ${user.name.first} ${user.name.last} `)
            
        } )
        .catch( error => console.log(error))
    }, [] ) 

    const [cart, setCart] = useState([])
    

    const evendHandlerAdd = (courses) => {
        console.log("product added",courses)
        const newCart = [ ...cart, courses ];
        setCart(newCart);
    }

    return (
        <div  className="main">
            <h1 className="coursetitle">Our Courses</h1>
                <div className="mainsection d-flex">
                <div className="learningMainsection">
                    { 
                        courses.map(courses => <Course 
                                evendHandlerAdd = {evendHandlerAdd}
                                courses = {courses} >

                            </Course> )
                    }
                    
                </div>

                <div className="popularSection" >
                    <h2>Your purchesed courses</h2>
                    
                    <Cart cart = {cart}></Cart>

                    <hr/>
                    <h3>Our Featured Instractor's</h3>

                   
                
                        {
                            user.map(user => 
                            <PopulerTeacher name={`
                            ${user.name.title} ${user.name.first} ${user.name.last} 
                        `}
                        image = {user.picture.large}
                        email ={user.email}
                        course_key = {user.id.value}
                        
                        
                        ></PopulerTeacher>

                            
                            )
                            
                        }
                
                </div>
                </div>
             
        </div>

       
    );
};

export default Learning;