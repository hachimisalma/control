import React, { useState } from "react"; 
export default function Autocomplete(){
      const [Saisi,setSaisi]=useState("")
      const [suug,setSuugt]=useState("")

    return(<>
    
    
    <div>
        <input type="text" name='filiere' onChange={handleChange} />
        
        <ul>
          {suug.filter((suug) =>
              suug.toLowerCase().includes(setSaisi.toLowerCase())
            )
            .map((suug, index) => (
              <li key={index}>{suug}</li>
            ))}
        </ul>
      </div>
    </>)
}