import "./DropdownList.css"

const agentFunctionDropdownList = (props) => {
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} value={props.stringValue} required={props.mandatory}>
                {props.items.map(item => {
                return <option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
}

export default agentFunctionDropdownList;