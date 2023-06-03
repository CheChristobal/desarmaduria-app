import React from 'react';

const Card = ({ title, description,image }) => {
  return (
    <div className="card">
        
      <img src={image} alt="Imagen de la tarjeta" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
