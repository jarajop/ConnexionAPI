import React from 'react'
 import { useState } from "react";
 import  { useEffect } from 'react';
 import { getData } from '../core/APIHelpers';


  
function Private_driver() {

  const [forfaits, setForfaits] = useState([]);


useEffect(() => {
  const endpoint = '/parking/car/private_car/forfait?is_company=false';

    getData(endpoint)
    .then(data => {
      if (data) {
        setForfaits(data);
        console.log('Données de l\'API :', data);
      } else {
        console.log('La requête API a retourné des données nulles ou une erreur.');}
    });
}, []);
  
  return (
    <div>Private_driver</div>
  )
}

export default Private_driver