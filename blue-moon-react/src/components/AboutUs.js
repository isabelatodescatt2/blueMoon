import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../App.css";

// Assets
import Logo from "../imagens/marca/LogotipoBMBlue.png";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="about-us">
      <div className="about-us-overlay">
        <Row className="align-items-center">
          <Col lg={7} md={12} className="mb-4 mb-lg-0">
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/LKuN-Pv9uM0?si=XMYCKzUvYsnpI6Ro" 
                title="Blue Moon School of Jazz" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="youtube-embed"
              />
            </div>
          </Col>
          
          <Col lg={5} md={12}>
            <div className="about-content">
              <div className="logo-container">
                <img 
                  src={Logo} 
                  alt="Blue Moon School of Jazz" 
                  className="logo-img" 
                />
              </div>
              
              <div className="description">
                <p>
                  A <strong>Blue Moon</strong> é uma banda que traz a essência do <strong>Soul, Jazz e Blues</strong>, 
                  unindo talento e paixão pela música. Com um repertório que passeia pelos grandes 
                  clássicos com interpretações renovadas! O grupo é formado por Lua Brunetti (vocal), 
                  Arthur Motta (teclas), Marco Duzzioni (guitarra), João Amorim (baixo) e Heitor Sens (bateria).
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;