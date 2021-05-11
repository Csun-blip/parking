import React, {useRef} from 'react'


const ExpenseForm = ({expense, setExpense}) => {
    const desc=useRef(null);
    const price=useRef(null);
    const date=useRef(null);

    const Add = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setExpense([...expense, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value="";
        price.current.value=null;
        date.current.value=null;
    }
    return (
       <>
       <form className="amount-form" onSubmit={Add}>
           <div className="form-inner">
               <input type="text" name="desc" id="desc"
               placeholder="Parking Area" ref={desc}/>
               <input type="number" name="price" id="price"
               placeholder="Price" ref={price}/>
               <input type="date" name="date" id="date"
               placeholder="Date" ref={date}/>
               
               <input type="submit" value="Add"/>
           </div>
       </form>
       </>
    )
}

export default ExpenseForm
