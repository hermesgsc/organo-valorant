import Card from "../card";
import "./functioncategory.css"

const FunctionCategory = (props) => {
  return (
    <section className="function-title">
      <h3>{props.nameFunction}</h3>
      <div className="card-agents">
        {props.newAgents.map(newAgent => (
          <Card
            key={newAgent.agentName}
            agentName={newAgent.agentName}
            image={newAgent.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FunctionCategory;