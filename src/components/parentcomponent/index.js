import React, { useRef, useState } from 'react';
import Form from './Form';
import FunctionCategory from './FunctionCategory';

const ParentComponent = () => {
  const [agents, setAgents] = useState([]);
  const functionCategoryRef = useRef(null);

  const handleNewAgentAdded = (newAgent) => {
    setAgents((prevAgents) => [...prevAgents, newAgent]);

    // Rola para o componente FunctionCategory
    if (functionCategoryRef.current) {
      functionCategoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1>Adicionar Novo Agente</h1>
      <Form toNewAgentAdded={handleNewAgentAdded} agentFunction={['Duelista', 'Controlador', 'Iniciador', 'Sentinela']} />
      <FunctionCategory
        ref={functionCategoryRef}
        nameFunction="Funções dos Agentes"
        newAgents={agents}
      />
    </div>
  );
};

export default ParentComponent;
