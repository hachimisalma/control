import React from "react";
export default function InscriptionList({data}){

    
    return(<>
    
    <table>
            
            {
            data.listProducts.map((elt, idx)=>
                <tr key={idx}><td>{elt.FirstName}</td>
                <td>{elt.LastName}</td>
                <td>{elt.ville}</td>
                </tr>
            )}
        </table>
    </>)
}