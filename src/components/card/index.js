import React from 'react';
import './card.css';

const agents = [
  {function:'Controlador', name: 'Astra', image: '/images/Astra_icon.webp' },
  {function:'Iniciador', name: 'Breach', image: '/images/Breach_icon.webp' },
  {function:'Controlador', name: 'Brimstone', image: '/images/Brimstone_icon.webp' },
  {function:'Sentinela', name: 'Chamber', image: '/images/Chamber_icon.webp' },
  {function:'Controlador', name: 'Clove', image: '/images/Clove_icon.webp' },
  {function:'Sentinela', name: 'Cypher', image: '/images/Cypher_icon.webp' },
  {function:'Sentinela', name: 'Deadlock', image: '/images/Deadlock_icon.webp' },
  {function:'Iniciador', name: 'Fade', image: '/images/Fade_icon.webp' },
  {function:'Iniciador', name: 'Gekko', image: '/images/Gekko_icon.webp' },
  {function:'Controlador', name: 'Harbor', image: '/images/Harbor_icon.webp' },
  {function:'Duelista', name: 'Iso', image: '/images/Iso_icon.webp' },
  {function:'Duelista', name: 'Jett', image: '/images/Jett_icon.webp' },
  {function:'Iniciador', name: 'KAYO', image: '/images/KAYO_icon.webp' },
  {function:'Sentinela', name: 'Killjoy', image: '/images/Killjoy_icon.webp' },
  {function:'Duelista', name: 'Neon', image: '/images/Neon_icon.webp' },
  {function:'Controlador', name: 'Omen', image: '/images/Omen_icon.webp' },
  {function:'Duelista', name: 'Phoenix', image: '/images/Phoenix_icon.webp' },
  {function:'Duelista', name: 'Raze', image: '/images/Raze_icon.webp' },
  {function:'Duelista', name: 'Reyna', image: '/images/Reyna_icon.webp' },
  {function:'Sentinela', name: 'Sage', image: '/images/Sage_icon.webp' },
  {function:'Iniciador', name: 'Skye', image: '/images/Skye_icon.webp' },
  {function:'Iniciador', name: 'Sova', image: '/images/Sova_icon.webp' },
  {function:'Controlador', name: 'Viper', image: '/images/Viper_icon.webp' },
  {function:'Duelista', name: 'Yoru', image: '/images/Yoru_icon.webp' },
];

const Card = ({ agentName }) => {
  const agent = agents.find((agent) => agent.name.toLowerCase() === agentName.toLowerCase());

  return (
    <div className="card">
      {agent && (
        <>
          <div className="header">
            <img src={`../${agent.image}`} alt={`${agent.name} Icon`} />
          </div>
          <div className="footer">
            <h4>{agent.name}</h4>
            <label>{agent.function}</label>
          </div>
        </>
      )}
      {!agent && (
        <div className="footer">
          <h4>Agent not found</h4>
        </div>
      )}
    </div>
  );
};

export default Card;
