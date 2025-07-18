import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// imagens
import Imagem1 from "../imagens/accordion/1.png";
import Imagem2 from "../imagens/accordion/2.png";
import Imagem3 from "../imagens/accordion/3.png";
import Imagem4 from "../imagens/accordion/4.png";
import Imagem5 from "../imagens/accordion/5.png";

const ImageBannerAccordion = () => {
  const [hoverIndex, setHoverIndex] = useState(null); 

  const items = [
    {
      id: 1,
      image: Imagem1,
      altText: "Descrição imagem 1",
      link: "/canto"
    },
    {
      id: 2,
      image: Imagem2,
      altText: "Descrição imagem 2",
      link: "/pagina2"
    },
    {
      id: 3,
      image: Imagem3,
      altText: "Descrição imagem 3",
      link: "/pagina3"
    },
    {
      id: 4,
      image: Imagem4,
      altText: "Descrição imagem 4",
      link: "/pagina4"
    },
    {
      id: 5,
      image: Imagem5,
      altText: "Descrição imagem 5",
      link: "/pagina5"
    }
  ];

  const handleClick = (link) => {
    window.location.href = link;
    // Ou se estiver usando React Router:
    // navigate(link);
  };

  return (
    <div className="container-fluid px-0">
      <div 
        className="banner-accordion"
        onMouseLeave={() => setHoverIndex(null)} // Reseta quando mouse sai do container
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`banner-panel ${hoverIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setHoverIndex(index)}
            onClick={() => handleClick(item.link)}
            style={{ backgroundImage: `url(${item.image})` }}
            role="button"
            tabIndex={0}
          >
            <div className="panel-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBannerAccordion;