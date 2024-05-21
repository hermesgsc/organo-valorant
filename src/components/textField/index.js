
import "./TextField.css";

const TextField = (props) => {

  const modifiedPlaceholder = `${props.placeholder}...`;
  
  const onTyped = (event) => {
    props.onChanged(event.target.value)
   
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.stringValue}
        onChange={onTyped}
        required={props.mandatory}
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
};

export default TextField;
