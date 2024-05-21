import React from 'react';
import './card.css';

const agents = [
  { name: 'Astra', image: '/images/Astra_icon.webp' },
  { name: 'Breach', image: '/images/Breach_icon.webp' },
  { name: 'Brimstone', image: '/images/Brimstone_icon.webp' },
  { name: 'Chamber', image: '/images/Chamber_icon.webp' },
  { name: 'Clove', image: '/images/Clove_icon.webp' },
  { name: 'Cypher', image: '/images/Cypher_icon.webp' },
  { name: 'Deadlock', image: '/images/Deadlock_icon.webp' },
  { name: 'Fade', image: '/images/Fade_icon.webp' },
  { name: 'Gekko', image: '/images/Gekko_icon.webp' },
  { name: 'Harbor', image: '/images/Harbor_icon.webp' },
  { name: 'Iso', image: '/images/Iso_icon.webp' },
  { name: 'Jett', image: '/images/Jett_icon.webp' },
  { name: 'KAYO', image: '/images/KAYO_icon.webp' },
  { name: 'Killjoy', image: '/images/Killjoy_icon.webp' },
  { name: 'Neon', image: '/images/Neon_icon.webp' },
  { name: 'Omen', image: '/images/Omen_icon.webp' },
  { name: 'Phoenix', image: '/images/Phoenix_icon.webp' },
  { name: 'Raze', image: '/images/Raze_icon.webp' },
  { name: 'Reyna', image: '/images/Reyna_icon.webp' },
  { name: 'Sage', image: '/images/Sage_icon.webp' },
  { name: 'Skye', image: '/images/Skye_icon.webp' },
  { name: 'Sova', image: '/images/Sova_icon.webp' },
  { name: 'Viper', image: '/images/Viper_icon.webp' },
  { name: 'Yoru', image: '/images/Yoru_icon.webp' },
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
