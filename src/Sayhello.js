import React, { useState } from 'react';

function Sayhello ({props}){
    const [compteur,setCompteur]=useState(0);



    console.log(props); 
  return (

  <>
    <div>
    
     {/*    
     alert('Sayhello');
     <h1>Compteur : {compteur}</h1>
      <button className='btn btn-info' onClick={()=>setCompteur(compteur+1)}>Increment</button>
      <button className='btn btn-primary' onClick={()=>setCompteur(compteur-1)}>Decrement</button>
 */}
      <h1>wooo! {props.firstName} </h1>
      <p>heyy  {props.lastName}</p>
      
    
    </div>
    </>
  )
}

export default Sayhello