import React from 'react'
import '../Components/Tracker.css'

function Calculate({totalAmount}) {
    return(
        <header>
            <h1>Parking Expense Tracker </h1>
            <div className="total-amount">RS{totalAmount}</div>
        </header>
    )
}


export default Calculate
