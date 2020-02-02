import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <i className="icon ion-logo-facebook"></i>
        <i className="icon ion-logo-twitter"></i>
        <i className="icon ion-logo-instagram"></i>
        <i className="icon ion-logo-linkedin"></i>
      </div>
      <p align="center">Personel Projects: </p>
      <div className="projects">
        <p className="project-name recipe">Recipe App</p>
        <p className="project-name moviesearch">MovieSearch App</p>
      </div>
      <div className="copyright-info">
        <p className="author">Gaurav Moar</p>
        <p>Copyright 2008-2020</p>
        <p>
          All Right Reserved. Powered by{" "}
          <strong color="white">DelTech University</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
