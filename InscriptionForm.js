import React ,{useRef}from "react"; 
export default function InscriptionForm({action}){
   const InputData = useRef({});
   function handleChange(e){
    InputData[e.target.name] = e.target.value
}


    const handleAdd=(e)=>{
        e.preventDefault()
        action(data);
        }
        
    return(
       <>
        <form>
        <input name="FirstName" onChange={handleChange} placeholder="Entre First Name" style={InputData=="" ? { border: '2px solid red' }:style={border:"none"} }/><br></br>
          
            <input name="LastName" onChange={handleChange} placeholder="Entre Last Name" style={InputData=="" ? { border: '2px solid red' }:style={border:"none"} }/><br></br>
          
            <input name=" ville" onChange={handleChange} placeholder="Entre ville"style={InputData=="" ? { border: '2px solid red' }:style={border:"none"} }/><br/><br></br>

            <button onClick={handleAdd}>submit</button>
            <button>Cancel</button>
        
        </form>
        
        </>
        
      
    )
}

   