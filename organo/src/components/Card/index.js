import './Card.css'


const Card = ({name, role, imageLink}) =>{
    return(
        
        <div className='card'>

            <div className='header'>
                <img src={imageLink} alt={name} />
            </div>

            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>

        </div>


    )
}


export default Card;