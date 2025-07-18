import React from "react";
import { Carousel } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../App.css";

// Dados de exemplo (substitua pelos seus)
const avaliacoes = [
  {
    nome: "Bryan Dias",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    nota: 5,
    comentario: "Estou muito satisfeito com a Blue Moon! Os professores são extremamente qualificados e atenciosos, e o ambiente da escola é acolhedor e inspirador. Comecei com aulas de canto há 6 meses e já percebo uma boa evolução, além de ter ganhado muita confiança. Recomendo para quem busca uma escola de música séria, mas com um toque pessoal e humano."
  },
  {
    nome: "Ana Paula",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    nota: 5,
    comentario: "Melhor professora que já tive! Didática perfeita e paciência de santa."
  },
  {
    nome: "Francisco Pazzini",
    foto: "https://randomuser.me/api/portraits/men/75.jpg",
    nota: 4,
    comentario: "Melhor aula de todas, a lua não poderia me ensinar melhor, graças a ela eu sei cantar todas as músicas do Guns and roses"
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