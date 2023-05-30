import React, { useState } from 'react';
import '../HomePage.css';
import Sliding from '../components/slider';
import Register from './Register';
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';
import Pagefooter from '../components/footer';
import axios from 'axios';
import "../slider.css"
import SearchBar from '../components/searchbar';
import Footer from '../components/footer';
import "../footer.css"
import Footerpage from '../components/footer';
import Sidebar from '../components/Sidebar';
import Offres from '../components/lastoffre';
import "../template.css"
import BarChart from '../components/charts';



const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/contacts', formData)
      .then(response => {
        // handle success
        console.log(response.data);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  return (
    <div className="homepage">
      {/* <Sliding />  */}
      <SearchBar />
      <section class="categories-section section-padding" id="categories-section">
        <div class="container">
          <div class="row justify-content-center align-items-center">

            <div class="col-lg-12 col-12 text-center">
              <h2 class="mb-5">Parcourir les offres par catégories</h2>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Industriel" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-hard-hat"></i>

                  <small class="categories-block-title">Industriel</small>

                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Developpement" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-code"></i>

                  <small class="categories-block-title">Developpement</small>


                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Marketing" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-bullhorn"></i>


                  <small class="categories-block-title">Marketing</small>

                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Ingenieur" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-cogs"></i>

                  <small class="categories-block-title">Ingenieur</small>


                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Gestion" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-tasks"></i>



                  <small class="categories-block-title">Gestion</small>


                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="categories-block">
                <a href="/offre?keyword=Design" class="d-flex flex-column justify-content-center align-items-center h-100">
                <i class="categories-icon fas fa-palette"></i>


                  <small class="categories-block-title">Design</small>


                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="about-section" id="about">
  <div class="container">
    <div class="row">

      <div class="col-lg-6">
        <div class="about-image-wrap custom-border-radius-start">
          <img src={require("../sources/entretien.jpg")} height={800}  alt="" />
        </div>
      </div>

      <div class="col-lg-6">
        <div class="custom-text-block">
          <h2 class="text-white mb-2">Introduction du site</h2>

          <p class="text-white">Notre site web dédié au recrutement et à la gestion des entretiens est conçu pour simplifier et optimiser le processus de recrutement. Nous offrons une plateforme intuitive où les candidats peuvent postuler en ligne et explorer nos opportunités d'emploi. Grâce à notre système de gestion des entretiens, nous rationalisons les calendriers, les évaluations et la communication entre les recruteurs et les candidats. Chez [Nom de l'entreprise], nous valorisons la diversité et l'inclusion, et nous nous engageons à offrir une expérience positive à chaque étape du processus de recrutement. Rejoignez-nous pour faire partie d'une équipe talentueuse et dynamique.</p>

          <div class="custom-border-btn-wrap d-flex align-items-center mt-5">
            <a href="/offre" class="custom-link smoothscroll"><h5 class="text-white">Explorer les offres</h5></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      <Offres />

      <div class="col-lg-12 col-12 text-center">
        <h2 class="mb-5">Parcourir les offres par ville</h2>
      </div>
      <div className="container text-center">
        <div className="row align-items-start" >
          <div className="col" >
            <h4>Sousse</h4>
            <Link to="/offre?location=Sousse" ><img className="location" src={require("../sources/sousse.jpg")} /> </Link><br />
          </div>


          <div className="col" >
            <h4>Ben arous</h4>
            <Link to="/offre?location=Ben Arous" ><img className="location" src={require("../sources/Ben_arous.jpg")} /> <br /></Link>
          </div>


          <div className="col" >
            <h4>Lac</h4>
            <Link to="/offre?location=lac" ><img className="location" src={require("../sources/lac.jpg")} /> <br /></Link>
          </div>
          <div className="col" >
            <h4>Mourouj</h4>
            <Link to="/offre?location=mourouj" ><img className="location" src={require("../sources/mourouj.jpg")} /> <br /></Link>
          </div>
          <div className="col" >
            <h4>Ennaser</h4>
            <Link to="/offre?location=Ennasr" ><img className="location" src={require("../sources/Ennaser.jpg")} /> <br /></Link>
          </div>

          <div className="col" >
            <h4>Sfax</h4>
            <Link to="/offre?location=Sfax" ><img className="location" src={require("../sources/sfax.jpg")} /> <br /></Link>
          </div>
        </div>
      </div>
      
      <section class="contact-section section-padding">
        <div class="container" id="Contact">
        <div class="col-lg-12 col-12 text-center">
        <h2 class="mb-5">Contact</h2>
      </div>
          <div class="row justify-content-center">

            <div class="col-lg-6 col-12 mb-lg-5 mb-3">
              <div class="contact-info-wrap">
                <div class="contact-info d-flex align-items-center mb-3">
                  <i class="custom-icon fas fa-building iicone"></i>


                  <p class="mb-0">
                    <span class="contact-info-small-title">Agence les Berges du Lac:</span>

                    App B5, 3ème étage, Résidence les Fleurs, Rue du Lac Turkana,  1053 Les Berges du Lac                  </p>
                </div>

                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-clock iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Horaire:</span>

                    <a class="site-footer-link">

                      Du Lundi au Vendredi : de 09h00 à 17h30

                    </a>
                  </p>
                </div>

                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-phone iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Asistance technique:</span>

                    <a class="site-footer-link">
                      (+216)23 344 3 20
                    </a>
                  </p>

                </div>
                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-phone iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Service commercial</span>

                    <a class="site-footer-link">
                      :(+216)29 34 43 20
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-12 mb-3 mx-auto">
              <div class="contact-info-wrap">
                <div class="contact-info d-flex align-items-center mb-3">
                  <i class="custom-icon fas fa-building iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Office</span>

                    Tunis , Tunisia
                  </p>
                </div>

                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-globe iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Site web</span>

                    <a class="site-footer-link">
                      www.poste.tn
                    </a>
                  </p>
                </div>

                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-phone iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Phone</span>

                    <a class="site-footer-link">
                      24988746
                    </a>
                  </p>
                </div>

                <div class="contact-info d-flex align-items-center">
                  <i class="custom-icon fas fa-envelope iicone"></i>

                  <p class="mb-0">
                    <span class="contact-info-small-title">Email</span>

                    <a class="site-footer-link">
                      info@jobportal.co
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-12 mx-auto">
              <form class="custom-form contact-form" onSubmit={handleSubmit}>
                <h2 class="text-center mb-4">Contactez-nous</h2>

                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <label for="first-name"> Nom</label>

                    <input type="text"
                      name="name"
                      class="form-control"
                      placeholder="Entrez votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required />
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <label for="email">Email </label>

                    <input
                      type="text"
                      placeholder="Entrez votre email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      class="form-control"
                      required />

                  </div>

                  <div class="col-lg-12 col-12">
                    <label for="message">Message</label>

                    <textarea type="text"
                      placeholder="Entrez votre message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange} class="form-control" ></textarea>
                  </div>

                  <div class="col-lg-4 col-md-4 col-6 mx-auto">
                    <button type="submit" class="form-control">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div >
      </section >




    </div >
  );
};


export default HomePage;