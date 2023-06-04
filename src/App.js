import React from 'react';
import Card from './components/Card';
import ServiceSession from './components/ServiceSession';
import Navbar from './components/Navbar';
import './App.css';
import image1 from './images/Placeholder.png'



import ContactSection from './components/ContactSection';


const App = () => {
  const components = [
    { title: 'Motor de Arranque', description: 'Pieza eléctrica que se utiliza para iniciar el motor del vehículo.', image: image1 },
    { title: 'Caja de Cambios Automática', description: 'Transmisión automática que cambia de marcha de forma automática según la velocidad y la carga del vehículo.', image: image1  },
    { title: 'Radiador', description: 'Dispositivo de enfriamiento que disipa el calor del líquido refrigerante para evitar el sobrecalentamiento del motor.', image: image1  },
    { title: 'Pinza de Freno', description: 'Parte del sistema de frenos que ejerce presión sobre los discos de freno para detener el vehículo.', image: image1  },
    { title: 'Faro Delantero', description: 'Luz delantera que proporciona iluminación en la parte frontal del vehículo durante la conducción nocturna.',image: image1  },
    { title: 'Parachoques Trasero', description: 'Pieza de la carrocería que protege la parte trasera del vehículo de posibles impactos.',image: image1  },
  ];

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    let index = 0;

    while (index < array.length) {
      chunkedArray.push(array.slice(index, size + index));
      index += size;
    }

    return chunkedArray;
  };

  const chunkedComponents = chunkArray(components, 3);

  return (
    <div className="container">
      <Navbar />
      <div className="hero">
        <h1 className="hero-title">Página la Mecanica</h1>
        <p className="hero-description">Bienvenido a nuestra página de mecanica. Encuentra piezas de calidad y servicios de mecánica para tu vehículo.</p>
      </div>
      {chunkedComponents.map((row, rowIndex) => (
        <div id="card" className="card-row" key={rowIndex}>
          {row.map((component, index) => (
            <Card
              key={index}
              title={component.title}
              description={component.description}
              image={component.image}
            />
          ))}
        </div>
      ))}
      <div id="servicios" className="service-section">
        <h2>Servicios de Mecánica</h2>
        <div className="service-container">
          <div className="service">
            <h3>Mantenimiento de motor</h3>
            <p>Realizamos un completo mantenimiento de motor para mantenerlo en óptimas condiciones de funcionamiento.</p>
          </div>
          <div className="service">
            <h3>Cambio de aceite y filtro</h3>
            <p>Realizamos el cambio de aceite y filtro para garantizar un buen rendimiento y prolongar la vida útil del motor.</p>
          </div>
          <div className="service">
            <h3>Reparación de frenos</h3>
            <p>Ofrecemos servicios de reparación y mantenimiento de frenos para asegurar una conducción segura y eficiente.</p>
          </div>
        </div>
      </div>
      
      <div id="contacto">
      <ContactSection/>
      </div>
    </div>
  );
};

export default App;
