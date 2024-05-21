import TextField from "../textField";
import AgentFunctionDropdownList from "../dropdownlist";
import Button from "../button";
import "./form.css";

const Form = () => {
  const agentFunction = ["Duelista", "Iniciador", "Sentinela", "Controlador"];

  const whenSaved = (event) => {
    event.preventDefault();
  };

  return (
    <section className="container-form">
      <form onSubmit={whenSaved}>
        <h2>Preencha as informações para criar o card</h2>
        <TextField
          mandatory={true}
          label="Agente"
          placeholder="Digite o nome do agente"
        />

        <TextField
          mandatory={true}
          label="Imagem"
          placeholder="Digite a URL da imagem do agente"
        />

        <AgentFunctionDropdownList
          mandatory={true}
          label="Função"
          items={agentFunction}
        />

        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
