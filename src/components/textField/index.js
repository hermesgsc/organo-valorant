import "./TextField.css"

const textField = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`
    return (
        <div className="text-field">
        <label>{props.label}</label>
        <input placeholder={modifiedPlaceholder}/>
        </div>
    );
};

export default textField;