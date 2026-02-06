import { use, useState } from "react";

export default function MyFirstComponent({name,age,children}) {
    const [rio, setRio] = useState("rida");
    
    
return(
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
        <h1 style={{color: "blue", fontSize: "24px", background: "lightgray"}}>Hello {name}, you are {age} years old and your freind is {rio}!</h1>
        <button onClick={handleClick}>Click Me</button>
        <input type="text" placeholder="Type something..." />
        {children}
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
      
        
        
        
        </div> )
    
    function handleClick() {
        if(rio === "rida") {
            setRio("youssef");
        } else {
            setRio("rida");
        }
       

    }
    
   
    
    
    
    








}