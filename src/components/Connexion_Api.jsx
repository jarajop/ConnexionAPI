import React from 'react'
import axios from "axios";
 import { useState } from "react";
 import  { useEffect } from 'react';

//kaba a dit que les noms des var pr declarer les states pour dynamiser les params d'API par propreté de code 
// tu mets les mem noms au niveau de postman 
 const Base_Url_subito = 'https://api-dev.mysubito.net/api/v1';


 const client = axios.create({
    baseURL:Base_Url_subito , 
    mode: 'cors',
     headers :{
     "platform":"73e16ab1-fwig-8187-lhgc-7eb39ad0534d"
    }


  });
  
  

function Connexion_Api() {
   const [posts, setPosts] = useState([]); // c avc les states kon parle de render 

  //  const [params,setParams]=useState({to_city_code: "aeroport_international_blaise
  //  _diagne_aibd",from_city_code:"dakar"});

   function setParams(){

   }



     useEffect(() => {
      client.get('/parking/car/navette_airport/customer/filter?to_city_code=dakar&from_city_code=aeroport_international_blaise_diagne_aibd')
        .then(response => {
          setPosts(response.data)
          console.log('Données de l\'API :', response.data);
        });
    }, [])



  
  return (
<div>
     
    </div>  )
}

export default Connexion_Api ;


