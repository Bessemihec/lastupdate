import React from 'react';
import '../footer.css';



function Footerpage() {
  return (
    <footer class="site-footer">
    <div class="container">
        <div class="row">
       
        <div class="col-lg-2 col-md-3 col-6 ">
                <div class="d-flex align-items-center mb-4">

                <img src={require("../sources/poste.svg.png")} height={100} alt="banner-image"  />
                </div>  

                <p class="mb-2">
                    <i class="custom-icon fas fa-globe me-1"></i>

                    <a href="#" class="site-footer-link">
                    www.poste.tn
                    </a>
                </p>

                <p class="mb-2">
                    <i class="custom-icon fas fa-phone me-1"></i>

                    <a class="site-footer-link">
                        305-240-9671
                    </a>
                </p>

                <p>
                    <i class="custom-icon fas fa-envelope me-1"></i>

                    <a class="site-footer-link">
                        info@jobportal.co
                    </a>
                </p>

            </div>

            <div class="col-lg-2 col-md-3 col-6 ms-lg-auto">
                <h6 class="site-footer-title">Company</h6>

                <ul class="footer-menu">
                    <li class="footer-menu-item"><a href="/#about" class="footer-menu-link">Aprops</a></li>



                    <li class="footer-menu-item"><a href="/offre" class="footer-menu-link">Offres</a></li>

                    <li class="footer-menu-item"><a href="/#Contact" class="footer-menu-link">Contact</a></li>
                </ul>
            </div>


            <div class="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
                <h6 class="site-footer-title">Nos partenaires</h6>
          <ul class="partners">
              <li class="footer-menu-item"><a href="#"><img src={require("../sources/money.png")} height={100} alt="Partner 1"/></a></li>
              <li class="footer-menu-item" ><a href="#"><img src={require("../sources/solidarite.png")} height={100} alt="Partner 2"/></a></li>
              <li class="footer-menu-item"><a href="#"><img src={require("../sources/telecom.jpg")} height={100} alt="Partner 3"/></a></li>
             
            </ul>
            </div>

        </div>
    </div>

    <div class="site-footer-bottom">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 col-12 d-flex align-items-center">
                    <p class="copyright-text">Copyright © Gotto Job 2048</p>

                    <ul class="footer-menu d-flex">
                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Privacy Policy</a></li>

                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Terms</a></li>
                    </ul>
                </div>

                <div class="col-lg-5 col-12 mt-2 mt-lg-0">
                    <ul class="social-icon">
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link fab fa-twitter"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link fab fa-facebook"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link fab fa-linkedin"></a>
                        </li>

                    </ul>
                </div>

                

                <a class="back-top-icon fas fa-arrow-up smoothscroll d-flex justify-content-center align-items-center" href="#top"></a>

            </div>
        </div>
    </div>
</footer>


  );
}

export default Footerpage;