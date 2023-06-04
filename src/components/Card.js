import React, { Component } from 'react';


import image1 from '../images/Placeholder.png'



const Card = ({ image,title, description }) => {
  return (
    <div className="card">
      
      <img src={image} alt={title}/>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
