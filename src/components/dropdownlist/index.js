import "./DropdownList.css"

const agentFunctionDropdownList = (props) => {
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select>
                {props.items.map(item => {
                return <option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
}

export default agentFunctionDropdownList;