import React from 'react'
import axios from "axios";
 import { useState } from "react";
 import  { useEffect } from 'react';

//kaba a dit que les noms des var pr declarer les states pour dynamiser les params d'API par propreté de code 
// tu mets les mem noms au niveau de postman 
 const Base_Url_subito = 'https://api-dev.mysubito.net/api/v1'; 


 const client = axios.create({
    baseURL:Base_Url_subito ,  //Chaque requête que vous faites avec cette instance commencera par cette URL.
    mode: 'cors',
     headers :{
     "platform":"73e16ab1-fwig-8187-lhgc-7eb39ad0534d" // cette partie gére la clé d'auth de l'api
    }


  });
  
  

function Connexion_Api() {
   const [posts, setPosts] = useState([]); // c avc les states kon parle de render 

   //  const [statusCode, setStatusCode] = useState([]);
  

   const  [params,setParams]=useState({toCityCode:'dakar', fromCityCode:'aeroport_international_blaise_diagne_aibd'});
//


//ici on a utilisé les promesses de js avc useeffect(ki permet d'effectuer des opérations asynchrones) pr faire la requete
useEffect(() => {
  client.get(`/parking/car/navette_airport/customer/filter?from_city_code=${params.fromCityCode}&to_city_code=${params.toCityCode}`)
    .then(response => {
      if (response.status === 200) { //si tu mets statusCode le code sera 200 mai affiche une erreur

      setPosts(response.data); // Lorsque la requête est réussie, les données de la réponse (response.data) sont mises à jour dans le state posts à l'aide de setPosts.
      console.log('Données de l\'API :', response.data);}
      else {
        // Si le code HTTP n'est pas égal à 200, affichez un message d'erreur
        console.error('Erreur lors de la requête API. Code HTTP :', response.status);
      }
    })
    .catch(error => { // gére les erreurs ki peuvent se produire lors de la requete
      console.error('Erreur lors de la requête API :', error);
    });
}, []); //cette partie c le tableau de dependances il est la pr dire a React kels variables useffect doit
// surveiller .Si le tableau est vide useEffect sera exécuté qu'une seule fois, après le rendu initial du composant. 
//Si le tableau contient des variables, le useEffect sera réexécuté chaque fois k la var change mai KAba a dit d'eviter de le mettre
//pour eviter de faire reexecution a chak fois  



// /parking/car/navette_airport/customer/filter?from_city_code=${fromCityCode}&to_city_code=${toCityCode} on pouvait aussi utiliser
// cette methode pour mettre des variables dans une chaine de caracteres

  
  return (
<div>
     
    </div>  )
}

export default Connexion_Api ;

/*useEffect est un outil puissant dans React qui permet d'effectuer des actions spécifiques dans un composant à des moments particuliers
 de son cycle de vie.

En termes simples :

Rendu Initial : Lorsqu'un composant est affiché pour la première fois à l'écran, cela s'appelle le "rendu initial".

Effets Asynchrones : Parfois, après que le composant est affiché, vous avez besoin d'effectuer des actions qui peuvent prendre un 
certain temps, comme charger des données depuis une API.

Role de useEffect : useEffect est utilisé pour gérer ces actions asynchrones. Vous lui donnez une fonction, et cette fonction sera 
exécutée après que le composant a été affiché. Cela garantit que ces actions asynchrones ne bloquent pas le rendu initial du composant.

Dans le contexte du code que vous avez fourni :

Le composant doit effectuer une requête à une API pour obtenir des données.
Cette requête peut prendre un certain temps, donc elle est asynchrone.
useEffect est utilisé pour déclencher cette requête asynchrone après que le composant a été affiché (après le "rendu initial").
Une fois que la requête est terminée, les données de l'API sont utilisées pour mettre à jour l'état local (posts), ce qui déclenche
 un nouveau rendu du composant avec les données actualisées.
En résumé, useEffect est un moyen de gérer des actions qui ne doivent pas bloquer le rendu initial d'un composant, mais qui doivent
 être effectuées après que le composant a été affiché à l'écran.*/

/*En résumé, le "rendu initial" dans React correspond à ce que les utilisateurs voient la première fois qu'ils arrivent sur votre 
page. useEffect vous permet de définir des actions à effectuer à ce moment-là, ou après. Cela contribue à assurer que votre 
application est prête à être utilisée une fois que le rendu initial est terminé.*/