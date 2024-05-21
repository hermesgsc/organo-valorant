import "./button.css"

const Button = (props) => {
    return (
        <button className="container-button slide">
            {props.text}
        </button>
    )
}

export default Button;