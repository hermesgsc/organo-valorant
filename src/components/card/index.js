import React from 'react';
import './card.css';
import agents from '../agents';

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
