
import "./TextField.css";

const TextField = (props) => {

  const modifiedPlaceholder = `${props.placeholder}...`;
  
  const whenTyped = (event) => {
    props.whenChanged(event.target.value)
   
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.stringValue}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
};

export default TextField;
