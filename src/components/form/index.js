import TextField from "../textField";
import { useState } from "react";
import AgentFunctionDropdownList from "../dropdownlist";
import Button from "../button";
import "./form.css";
import agents from "../agents";

const Form = (props) => {
  const [agentName, setAgentName] = useState("");
  const [agentFunctionList, setAgentFunction] = useState("Duelista");

  const onSaved = (event) => {
    event.preventDefault();
    
    const agent = agents.find(a => a.name.toLowerCase() === agentName.toLowerCase());
    if (agent && agent.function !== agentFunctionList) {
      alert("Error: Selecione a função correta do agente");
      return;
    }

    props.toNewAgentAdded({
      agentName,
      agentFunctionList
    });
  };

  return (
    <section className="container-form">
      <form onSubmit={onSaved}>
        <h2>Preencha as informações para criar o card</h2>
        <TextField
          stringValue={agentName}
          onChanged={(stringValue) => setAgentName(stringValue)}
          mandatory={true}
          label="Agente"
          placeholder="Digite o nome do agente"
        />
        <AgentFunctionDropdownList
          stringValue={agentFunctionList}
          onChanged={stringValue => setAgentFunction(stringValue)}
          mandatory={true}
          label="Função"
          items={props.agentFunction}
        />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
