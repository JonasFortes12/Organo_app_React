import './TextFild.css'

const TextFild = (props) => {
    return (
        
        <div className="text-fild" >
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder}/>
        </div>        
        

    )
    
}


export default TextFild; 