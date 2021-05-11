import React, {useState, useEffect} from 'react'
import Calculate from '../Components/Calculate'
import ExpenseForm from '../Components/ExpenseForm'
import ExpensesList from '../Components/ExpensesList'
import Navbar from '../Components/Navbar';


const Tracker = () => {

        const [expense, setExpense] = useState([]);
        const[totalAmount, setTotalAmount] =useState(0);

        useEffect(() => {
            let temp = 0;
            for(let i=0; i< expense.length; i++) {
                temp += parseInt(expense[i].price);
            }
            setTotalAmount(temp);
        }, [expense]);

    return (
        <>
        <Navbar/>
        <div className="tracker">
        <Calculate totalAmount={totalAmount}/>
        <ExpenseForm expense={expense} setExpense={setExpense}/>
        <ExpensesList expense={expense} setExpense={setExpense}/>        
        </div>

        </>
    )
}

export default Tracker
