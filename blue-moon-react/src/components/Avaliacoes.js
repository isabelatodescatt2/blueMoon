import React from "react";
import { Carousel } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../App.css";

// Dados de exemplo (substitua pelos seus)
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
      estrelas.push(<FaStar key={i} className="estrela-cheia" />);
    } else if (i === estrelasCheias + 1 && temMeiaEstrela) {
      estrelas.push(<FaStarHalfAlt key={i} className="estrela-meia" />);
    } else {
      estrelas.push(<FaRegStar key={i} className="estrela-vazia" />);
    }
  }

  return <div className="estrelas">{estrelas}</div>;
};

const Avaliacoes = () => {
  return (
    <div className="avaliacoes-container">
      <h2 className="titulo-secao">O que estão falando</h2>
      <Carousel indicators={false} interval={3000} pause={false}>
        {avaliacoes.map((avaliacao, index) => (
          <Carousel.Item key={index}>
            <div className="card-avaliacao">
              <div className="cabecalho-avaliacao">
                <img 
                  src={avaliacao.foto} 
                  alt={avaliacao.nome} 
                  className="foto-perfil"
                />
                <div className="info-pessoa">
                  <h5>{avaliacao.nome}</h5>
                  <RenderEstrelas nota={avaliacao.nota} />
                </div>
              </div>
              <p className="comentario">"{avaliacao.comentario}"</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Avaliacoes;