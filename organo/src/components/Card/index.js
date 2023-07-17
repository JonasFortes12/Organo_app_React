import {AiFillCloseCircle} from 'react-icons/ai';
import './Card.css'




const Card = ({name, role, id, imageLink, colorHeader, onDelete}) =>{
    
    const styleHeaderCard = {
        backgroundColor: colorHeader
    }

    const deleteCard = (collaboratorId) =>{
        onDelete(id);
    }

    return(
        
        <div className='card'>

            <AiFillCloseCircle 
            size={30} 
            color='#6278F7' 
            className='deleteButton' 
            onClick={deleteCard}
            />

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