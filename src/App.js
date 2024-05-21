import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import FunctionCategory from "./components/functioncategory";

function App(props) {
  const [newAgents, setNewAgent] = useState([]);

  const toNewAgentAdded = (newAgent) => {
    console.log(newAgent);
    setNewAgent([...newAgents, newAgent]);
  };

  const agentFunction = [
    {
      name: "Duelista",
    },

    {
      name: "Iniciador",
    },

    {
      name: "Sentinela",
    },

    {
      name: "Controlador",
    },
  ];

  return (
    <div>
      <Banner />
      <Form
        agentFunction={agentFunction.map((agentFunction) => agentFunction.name)}
        toNewAgentAdded={toNewAgentAdded}
      />
{agentFunction.map((functionItem) => (
  <FunctionCategory
    key={functionItem.name}
    nameFunction={functionItem.name}
    newAgents={newAgents.filter(agent => agent.agentFunctionList === functionItem.name)}
  />
))}
    </div>
  );
}

export default App;
