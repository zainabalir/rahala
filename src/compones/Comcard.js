import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../sours/css/comcard.css";
import complogo from "../sours/imges/complogo.jpg";
import complogo2 from "../sours/imges/complogo2.jpg";
import complogo3 from "../sours/imges/complogo3.jpg";

const cardData = [
  {
    image: complogo,
    title: "Rocky Road Travel",
    description:
      "Iraq Adventures offers packages for historical exploration and outdoor activities. Their tours cover cultural and adventure destinations throughout Iraq.",
    link: '/new-page'
  },
  {
    image: complogo2,
    title: "Raq Adventures",
    description:
      "Explore historical sites and outdoor activities like hiking in the Hamrin Mountains. Their tours span cultural and adventure destinations across Iraq.",
    link: '/new-page-2'
  },
  {
    image: complogo3,
    title: "Aknaf Al-Sawary",
    description:
      "Offering diverse packages, from cultural exploration to mountain hiking. Discover Iraq’s rich history with guided tours.",
    link: '/new-page-3'
  }
];

function Card({ image, title, description, onButtonClick }) {
  return (
    <div className="card">
      <img className="comp1" src={image} alt={title} width="100%" height="60%" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onButtonClick}>Book</button>
    </div>
  );
}

function Comcard() {
  const navigate = useNavigate();
  
  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="Comcard">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          title={card.title} 
          description={card.description} 
          onButtonClick={() => handleButtonClick(card.link)} 
        />
      ))}
    </div>
  );
}

export default Comcard;
