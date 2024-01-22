import React from 'react'
import "../assets/style/homepage.mysubito.css";
import BannerForm from './BannerForm';

function HomePage() {
    return (
            <div id='img_banner_home_page' className='pt-5 px-3'>
                <div className='pb-3 pt-5'>
                    <div className="title_banner_home">Bonjour !  </div>
                    <div className="subtitle_banner_home pb-4">Ou voulez-vous aller</div>
                    <div className="text_banner_home d-none  d-lg-flex flex-column">
                        <span> Réservez dès aujourd'hui pour une expérience de voyage</span>
                        <span>inoubliable ! Découvrez le confort de nos hébergements et la facilité</span>
                        <span>de nos services de mobilité. Votre aventure parfaite vous attend.</span>
                    </div>
                    
                </div>
                <div className='pt-5'> 
                <BannerForm/>

                </div>

                
            </div>
    )
}

export default HomePage;