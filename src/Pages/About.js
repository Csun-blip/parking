import React from 'react'
import car from '../Images/car.jpg'
import bike from '../Images/bike.jpg'
import * as FaIcons from "react-icons/fa";
import '../Components/About.css'
import Navbar from '../Components/Navbar';

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="about">
        
        <div class="about_area">
        
        <div class="container">
            
            <div class="row">
                <div class="area">

                    <div class="about_info">

                        <div class="title">
                            <h3>Sajilo Parking <FaIcons.FaParking/> </h3> 
                        </div>
                        <p>Nowadays parking is very important and hence it is necessary for every vehicle owner to park his or her car in a secure designated parking slot available.
                        Searching for parking spot is one of the hazardous works for the people.  The need to manage parking is increasing day by day.  People are confused where to park their vehicle.  
                        So, the Sajilo Parking makes easy for people to park their vehicle and help them avoid parking in no parking zone.  People will pay less fine as parking will be more organized.<br/>
                        <h4 className="contact">For More Details : Mail us at sajiloparking@gmail.com</h4></p>
                        
                    </div>
                </div>


                <div class="images">
                   
                        <div class="img_1">
                            <img src={car} alt="car"/>
                        </div>
                        <div class="img_2">
                            <img src={bike} alt="bike"/>
                        </div>
                    
                </div>

            </div>
        </div>
    </div>
        </div>
        </>
    )
}

export default About
