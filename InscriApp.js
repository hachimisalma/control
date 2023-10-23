
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutForm from "./RoutForm";
import InscriptionForm from "./InscriptionForm";
import InscriptionList from "./InscriptionList";
import Autocomplete from "./Autocomplete";
import axios from "axios";

export default function InscriApp(){
    
    
    
    const [apiData, setApiData] = useState({listinscription:[]})
    useEffect(()=>{
        axios.get("http://localhost:1337/api")
             .then((res)=>{setApiData({listinscription:res.data}); })
    })
    

function addToList(data){
   
    axios.post("http://localhost:1337/api/", {data:data})
         .then(()=>alert("Ajouté"))
         .catch(()=>alert("Erreur lors de l'insertion"))


}



return(

<>
  <BrowserRouter>
  <Routes>
  
      <Route index element={< RoutForm />} />
      <Route path="/InscriptionForm" element={<InscriptionForm action={addToList} /> }/>
      <Route path="/InscriptionList" element={<InscriptionList data={apiData}/>} />
   
  </Routes> 
</BrowserRouter>
 
         
</>



)}
