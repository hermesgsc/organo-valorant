import TextField from "../textField";
import { useState } from "react";
import AgentFunctionDropdownList from "../dropdownlist";
import Button from "../button";
import "./form.css";

const Form = (props) => {
  const [agentName, setAgentName] = useState("");
  const [agentFunctionList, setAgentFunction] = useState("Duelista");

  const onSaved = (event) => {
    event.preventDefault();
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
