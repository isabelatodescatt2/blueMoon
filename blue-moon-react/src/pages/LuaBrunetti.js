import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../App.css";
import LuaPNG from "../imagens/blue-moon/LuaPNG.png";
import CantoTitulo from "../imagens/blue-moon/CantoTitulo.png";

const LuaBrunetti = () => {
  const navigate = useNavigate();

  return (
    <div className="lua-page">
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
        aria-label="Voltar"
      >
        <FaArrowLeft size={20} />
      </button>

      <Container className="lua-container">
        <Row className="align-items-center">
          <Col lg={4} md={6} className="image-col">
            <div className="lua-image-container">
              <img 
                src={LuaPNG} 
                alt="Lua Brunetti" 
                className="lua-image"
              />
            </div>
          </Col>

          <Col lg={8} md={6} className="info-col">
            <div className="lua-content">
              <img 
                src={CantoTitulo} 
                alt="Aula de Canto" 
                className="aula-title"
              />
              
              <div className="lua-intro">
                <p className="compact-text">Com uma jornada musical que começou no piano e no canto clássico e evoluiu para os palcos do soul, jazz e MPB, Lua Brunetti traz para suas aulas uma mistura única de técnica, emoção e consciência social. Sua voz, inspirada em divas como Amy Winehouse e Nina Simone, carrega a força das mulheres que transformaram a música em instrumento de mudança.</p>
              </div>
              
              <div className="lua-details">
                <ul className="lua-features compact-list">
                  <li><strong>Técnica vocal completa</strong> - Respiração diafragmática, projeção, afinação e extensão, adaptáveis a qualquer estilo, do jazz ao rap.</li>
                  <li><strong>Interpretação e storytelling</strong> - Como cantar com verdade, transformando letras em histórias que emocionam.</li>
                  <li><strong>Performance de palco</strong> - Postura, presença cênica e dicas para vencer o medo de cantar em público.</li>
                  <li><strong>Improvisação e liberdade</strong> - Desde runs de R&B até a ousadia do jazz, explorando a voz como instrumento.</li>
                  <li><strong>Conexão com a música brasileira</strong> - A riqueza do samba, MPB e rap, com análises de Elis Regina, Maria Rita e Duquesa.</li>
                  <li><strong>Cuidados com a voz</strong> - Aquecimentos, relaxamento e hábitos para manter a saúde vocal em shows e estúdio.</li>
                </ul>
              </div>
              
              <div className="lua-description">
                <p className="compact-text">Mais do que técnica, Lua ensina a cantar com alma - seja para quem quer subir no palco, gravar suas composições ou simplesmente descobrir a própria voz, sempre com playlists inspiradoras e histórias de bastidores que só quem vive a música conhece.</p>
              </div>
              
              <div className="lua-practical-info compact-text">
                <p><strong>Duração:</strong> 60 minutos | <strong>Níveis:</strong> Iniciante ao Avançado</p>
                <p><strong>Formato:</strong> Individual ou em Grupo | <strong>Local:</strong> Estúdio Blue Moon ou Online</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LuaBrunetti;