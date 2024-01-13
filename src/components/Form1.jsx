import React from 'react'
import ReactDOM from "react-dom";
import "../assets/style/form1.css";
import Subito from "../assets/logo/logo-texte2-mysubito.png"

function Form1() {
    return (
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-lg-6 img_login bg-secondary'>hello </div>
                <div className='col-lg-6 '>
                    <div className='d-flex justify-content-center align-items-center'>        <img src={Subito} alt="" className="logo " />
                    </div>
                    <p className="text d-flex justify-content-center align-items-center">Connexion </p>
                    <p className="text22 d-flex justify-content-center align-items-center">
                        Entrer vos identifiants de connexions svp{" "}
                    </p>{" "}
                    {/* pour ls vals de width c soit 25,50,75,100 ou auto */}
                    <form >
                        <label htmlFor=""> Email
                        <input
                            className="user"
                            placeholder="Entrez ID or E-mail"
                            type="email"
                            id="email"
                            required
                        />{" "}
                        </label>
                        <br />
                        <label htmlFor=""> Mot de passe
                        <input
                            className="user mt-5"
                            placeholder="Entrez Mot de passe"
                            type="email"
                            id="email"
                            required
                        />{" "}
                        </label>
                    </form>
                    <br />
                    <div className="check d-flex justify-content-between pt-5 ">
                        {" "}
                        {/* mettre 2 choses de part et d'autre on le fait avc jus-cont-between */}{" "}
                        <span className="px-5">
                            <input type="checkbox" /> Restez connecter{" "}
                        </span>
                        <span className="px-5">Mot de passe oublier ?</span>
                    </div>
                    <button className="soumettre" type="submit" id="submit" required>
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form1;