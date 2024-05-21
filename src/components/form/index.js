
import TextField from '../textField';
import AgentFunctionDropdownList from '../dropdownlist'; 
import Button from '../button';
import './form.css';

const Form = () => {
  const agentFunction = [
    "Duelista",
    "Iniciador",
    "Sentinela",
    "Controlador",
  ];

  return (
    <section className="container-form">
      <form>
        <h2>Preencha as informações para criar o card</h2>
        <TextField 
          label="Agente" 
          placeholder="Digite o nome do agente" />
        
        <TextField
          label="Imagem"
          placeholder="Digite a URL da imagem do agente"
        />

        <AgentFunctionDropdownList 
        label="Função" 
        items={agentFunction}
        /> 

        <Button text="Criar card"/>
      </form>
    </section>
  );
};

export default Form;
