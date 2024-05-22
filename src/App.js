import { useRef, useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import FunctionCategory from "./components/functioncategory";

function App(props) {
  const [newAgents, setNewAgent] = useState([]);
  const functionCategoryRefs = useRef({});

  const toNewAgentAdded = (newAgent) => {
    setNewAgent((prevAgents) => [...prevAgents, newAgent]);

    if (functionCategoryRefs.current[newAgent.agentFunctionList]) {
      functionCategoryRefs.current[newAgent.agentFunctionList].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const agentFunction = [
    { name: "Duelista" },
    { name: "Iniciador" },
    { name: "Sentinela" },
    { name: "Controlador" },
  ];

  return (
    <div>
      <Banner />
      <Form toNewAgentAdded={toNewAgentAdded} agentFunction={agentFunction.map(af => af.name)} />
      {agentFunction.map((functionItem) => (
        <FunctionCategory
          key={functionItem.name}
          nameFunction={functionItem.name}
          newAgents={newAgents.filter(agent => agent.agentFunctionList === functionItem.name)}
          ref={(el) => functionCategoryRefs.current[functionItem.name] = el}
        />
      ))}
    </div>
  );
}

export default App;
