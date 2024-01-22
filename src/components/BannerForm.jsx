import React from 'react';
import "../assets/style/homepage.mysubito.css";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { useEffect } from 'react';
import { getData } from '../core/APIHelpers';


function BannerForm() {

  const [data, setData] = useState([]);
  const [ville ,setVille]=useState([]);



  useEffect(() => {
    const endpointCity = '/cartographic/cities/transfert_aeroport';

    getData(endpointCity)
      .then(data => {
        if (data) {
          setData(data);
          console.log('Données de l\'API :', data);
        } else {
          console.log('La requête API a retourné des données nulles ou une erreur.');
        }
      });
  }, []);
  return (
    <div>
      <ul className="nav nav-tabs p-0 m-0">
        <li className="nav-item d-flex  custom_filter p-0 m-0 ">
          <div><Icon icon="mdi:plane-car" color="white" width="24" height="24" /></div>
          <div><a className="nav-link " aria-current="page" href="#"><span className='text_banner_filter'>Transfert aeroport</span></a></div>
        </li>
      </ul>
      <div className='style_filter_banner py-3 px-3'>
        <div className='style_div_input d-flex align-items-center justify-content-around'>
          <div><input type="text" name="" id="" className='input_banner_form ' placeholder='Depart' /></div>
          <div><input type="text" name="" id="" className='input_banner_form ' placeholder='Selectionner votre ville' /></div>
          <div><input type="date" name="" id="" className='input_banner_form ' /></div>
          <select name="pets" id="pet-select" className='input_banner_form '  >


            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>

          </select>
          <div> <button className='button_filter_banner' onClick={onclick}>
            <p className='m-0 px-2 py-1 text_button_banner'>Rechercher</p>
          </button></div>
        </div>
      </div>
    </div>
  )
}

export default BannerForm;