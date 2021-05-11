
import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import list from '../Components/Area'
import '../Components/Home.css'
import Maps from './Maps'
import Navbar from '../Components/Navbar';



const Home = () => {

    const [search, setSearch] = useState('');

    var id = list.id;
     
    return (
        <>
        <Navbar/>

        <div className="home">


            {/* <div className="search-box">
                <input type="text" placeholder="Search ..." className="search" onChange={e => setSearch(e.target.value)} />

                {/* <button className="search-icon">
                
                    <FaIcons.FaSearch />
                    
                </button> */}
            {/* </div> */} 

            <div className="column">

                <div className="list">
                    {
                        list.map((item) => (
                            <div className="box-parking">
                                <div className="parking__img">
                                    <img src={item.img} alt={item.title} className="pic" />
                                </div>
                                <div className="parking__details">
                                    <div className="parking__info">
                                        <h3 className="list-title">{item.title}</h3>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div className="left_area">
                                                <FaIcons.FaParking />
                                                <h5 className="list-subtitle">{item.number}</h5>
                                            </div>
                                            <div className="right_price">
                                                <FaIcons.FaMoneyBillWave />
                                                <h5 className="list-price">{item.price}</h5>
                                            </div>
                                        </div>

                                    </div>

                                    <button className="btn-direction" id="dir">More Info</button>
                                </div>


                            </div>
                        ))}
                </div>
              
                <div className="map-style"> <Maps/> </div>
               

  
            </div>

        </div>
        </>
    )
}

export default Home

