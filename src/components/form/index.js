import TextField from "../textField";
import { useState } from "react";
import AgentFunctionDropdownList from "../dropdownlist";
import Button from "../button";
import "./form.css";

const Form = (props) => {

  const [agentName, setAgentName] = useState("");
  const [image, setImage] = useState("");
  const [agentFunctionList, setAgentFunction] = useState("");

  const whenSaved = (event) => {
    event.preventDefault();
    props.toNewAgentAdded({
      agentName,
      image,
      agentFunctionList
    })
  };

  return (
    <section className="container-form">
      <form onSubmit={whenSaved}>
        <h2>Preencha as informações para criar o card</h2>
        <TextField
          stringValue={agentName}
          whenChanged={(stringValue) => setAgentName(stringValue)}
          mandatory={true}
          label="Agente"
          placeholder="Digite o nome do agente"
        />

        <TextField
          stringValue={image}
          whenChanged={(stringValue) => setImage(stringValue)}
          mandatory={true}
          label="Imagem"
          placeholder="Digite a URL da imagem"
        />

        <AgentFunctionDropdownList
          stringValue={agentFunctionList}
          whenChanged={stringValue => setAgentFunction(stringValue)}
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
