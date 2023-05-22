import './DropDown.css'

const DropDown = (props) =>{
    return(

        <div className="drop-down">
            
            <label>{props.label}</label>
            <select value={props.value} onChange={props.onChange} required={props.required}>
                <option defaultValue=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>


    )
}


export default DropDown;