import { useState } from "react";
export default function MyInput() {
    const [valeur, setValeur] = useState("rio");
    return(
<div>
    <label>ecrire quelque chose</label>
    <input type="text" value={valeur} onChange={syncInput} />




</div>)
function syncInput(event) {
   const value = event.target.value;
   setValeur(value);
}
   
   



    }
