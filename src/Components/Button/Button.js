import "./button.css";

export function Button(props) {
    const {text, label, disabled} = props;
    return (
        <div style={{marginRight: 15}}>

            <button
                style={{
                    backgroundColor: disabled ? "lightgray" : "gray",
                    color: disabled ? 'gray' :  "#000",
                    cursor: 'pointer',
                }}
                disabled={disabled}
                className={"btn"}
                {...props}
            >{text}</button>

            <p style={{color: 'red'}}>{label}</p>
        </div>
    )
}
