import './Card.css'


const Card = ({name, role, imageLink, colorHeader}) =>{
    
    const styleHeaderCard = {
        backgroundColor: colorHeader
    }

    return(
        
        <div className='card'>

            <div style={styleHeaderCard} className='header'>
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