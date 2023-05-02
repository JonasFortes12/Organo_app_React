import './TextFild.css'

const TextFild = (props) => {
    return (
        
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>        
        

    )
    
}


export default TextFild; 