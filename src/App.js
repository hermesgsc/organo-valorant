import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import FunctionCategory from "./components/functioncategory";

function App() {
  const [newAgents, setNewAgent] = useState([]);

  const toNewAgentAdded = (newAgent) => {
    console.log(newAgent);
    setNewAgent([...newAgents, newAgent]);
  };

  const agentFunction = [
    {
      name:'Duelista',
    },

    {
      name:'Iniciador',
    },

    {
      name:'Sentinela',
    },

    {
      name:'Controlador',
    }
  ]

  return (
    <div>
      <Banner />
      <Form agentFunction={agentFunction.map(agentFunction => agentFunction.name)} toNewAgentAdded={toNewAgentAdded} />
      {agentFunction.map(agentFunction => <FunctionCategory key={agentFunction.name} nameFunction={agentFunction.name}/>)}
      
    </div>
  );
}

export default App;
