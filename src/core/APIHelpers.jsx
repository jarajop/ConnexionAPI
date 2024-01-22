import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from 'react';

const Base_Url_subito = 'https://api-dev.mysubito.net/api/v1';

const client = axios.create({
  baseURL: Base_Url_subito,
  mode: 'cors',
  headers: {
    "platform": "73e16ab1-fwig-8187-lhgc-7eb39ad0534d"
  }

});


// export async function getData(url) {
  
//   try {
//     const response = await client.get(url);

//     if (response.status === 200) {
//       setPosts(response.data);
//       console.log('Données de l\'API :', response.data);
//     } else {
//       console.error('Erreur lors de la requête API. Code HTTP :', response.status);
//     }
//   } catch (error) {
//     console.error('Erreur lors de la requête API :', error);
//   }
// }

export async function getData(url) {
  try {
    const response = await client.get(url);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Erreur lors de la requête API. Code HTTP :', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
    return null;
  }
}


export async function postData(url, data) {
  try {
    const response = await client.post(url, data);

    if (response.status === 201) {
      return response.data;
    } else {
      console.error('Erreur lors de la requête POST. Code HTTP :', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la requête POST :', error);
    return null;
  }
}


export async function putData(url, data) {
  try {
    const response = await client.put(url, data);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Erreur lors de la requête PUT. Code HTTP :', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la requête PUT :', error);
    return null;
  }
}


export async function deleteData(url) {
  try {
    const response = await client.delete(url);

    if (response.status === 204) {
      return { success: true };
    } else {
      console.error('Erreur lors de la requête DELETE. Code HTTP :', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la requête DELETE :', error);
    return null;
  }
}



function APIHelpers() {
  return (
    <div>APIHelpers</div>
  )
}

export default APIHelpers


