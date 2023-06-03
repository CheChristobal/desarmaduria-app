import React, { useState } from 'react';

const ServiceSession = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);

  const handleToggleSession = () => {
    setIsSessionActive(!isSessionActive);
  };

  return (
    <div className="session">
      <h2>Sesión de Servicios de Mecánica</h2>
      <button className="session-toggle" onClick={handleToggleSession}>
        {isSessionActive ? 'Terminar sesión' : 'Iniciar sesión'}
      </button>
      {isSessionActive && (
        <div className="session-details">
          <p>Detalles de la sesión de servicios de mecánica:</p>
          {/* Agrega aquí los detalles de la sesión */}
        </div>
      )}
    </div>
  );
};

export default ServiceSession;
