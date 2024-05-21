import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";

function App() {

  const [newAgents, setNewAgent] = useState([])

  const toNewAgentAdded = (newAgent) => {
    console.log(newAgent)
    setNewAgent({...newAgents, newAgent})
  }

  return (
    <div>
      <Banner />
      <Form toNewAgentAdded={newAgent => toNewAgentAdded(newAgent)}/>
    </div>
  );
}

export default App;
