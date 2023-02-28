import React from "react";
import { useState } from "react";
import "./home.css";
function Review() {

const [title, setTitle] = useState('')
const [date, setDate] = useState('')

    const textChange =(e)=>{
       setTitle(e.target.value)
    }

    const formReset =()=>{
        setTitle('')
        setDate('')
    }

    const handleSubmit =(e)=>{
       e.preventDefault()

       const event={
       title: title,
       date: date,
       id: Math.floor(Math.random() * 10000)
       }
       console.log(event);
       formReset()
    }


  return (
    <div className="chomu">
      <h2>Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Write something about this </span> <br />
          <input type="text"  
          onChange={textChange} 
          value={title}
        
          />
        </label>
<br /> <br />
        <label>
          <span>Date</span> <br />
          <input type="date" 
          onChange={(e)=>{setDate(e.target.value)}} 
            value={date}
          />
        </label> <br /><br />
        <p>Title-{title} Date-{date}</p>
        <button>Submit</button>
        <p onClick={formReset}>Click This to Reset the Form</p>
      </form>
    </div>
  );
}

export default Review;
