import React, { forwardRef } from 'react';
import Card from "../card";
import "./functioncategory.css";

const FunctionCategory = forwardRef((props, ref) => {
  return (
    <section className="function-title" ref={ref}>
      <h3>{props.nameFunction}</h3>
      <div className="card-agents">
        {props.newAgents.map(newAgent => (
          <Card
            key={newAgent.agentName}
            agentName={newAgent.agentName}
            agentFunction={newAgent.agentFunctionList}
          />
        ))}
      </div>
    </section>
  );
});

export default FunctionCategory;
