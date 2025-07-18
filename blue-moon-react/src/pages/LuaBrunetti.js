import React from "react";
import { Carousel } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../App.css";

const avaliacoes = [
  {
    nome: "Carlos Silva",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    nota: 4.5,
    comentario: "Aulas incríveis! A Lua transformou minha voz em apenas 2 meses. Recomendo demais!"
  },
  {
    nome: "Ana Paula",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    nota: 5,
    comentario: "Melhor professora que já tive! Didática perfeita e paciência de santa."
  },
  {
    nome: "Roberto Nascimento",
    foto: "https://randomuser.me/api/portraits/men/75.jpg",
    nota: 4,
    comentario: "Estou evoluindo muito rápido. Ambiente super profissional!"
  }
];

const RenderEstrelas = ({ nota }) => {
  const estrelas = [];
  const estrelasCheias = Math.floor(nota);
  const temMeiaEstrela = nota % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= estrelasCheias) {
      estrelas.push(<FaStar key={i} className="text-warning" />);
    } else if (i === estrelasCheias + 1 && temMeiaEstrela) {
      estrelas.push(<FaStarHalfAlt key={i} className="text-warning" />);
    } else {
      estrelas.push(<FaRegStar key={i} className="text-secondary" />);
    }
  }

  return <div className="estrelas">{estrelas}</div>;
};

const AvaliacoesCarrossel = () => {
  return (
    <Carousel indicators={false} interval={4000} pause="hover" className="avaliacoes-carrossel">
      {avaliacoes.map((avaliacao, index) => (
        <Carousel.Item key={index}>
          <div className="card-avaliacao-azul">
            <div className="d-flex align-items-center mb-3">
              <img 
                src={avaliacao.foto} 
                alt={avaliacao.nome} 
                className="foto-perfil-azul rounded-circle me-3"
              />
              <div>
                <h5 className="mb-0 text-white">{avaliacao.nome}</h5>
                <RenderEstrelas nota={avaliacao.nota} />
              </div>
            </div>
            <blockquote className="comentario-azul mb-0">"{avaliacao.comentario}"</blockquote>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AvaliacoesCarrossel;