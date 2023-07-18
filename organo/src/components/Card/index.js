import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './Card.css'




const Card = ({favorite, name, role, id, imageLink, colorHeader, onDelete, onFavoriteChange}) =>{
    
    const styleHeaderCard = {
        backgroundColor: colorHeader
    }

    const deleteCard = () =>{
        onDelete(id);
    }

    const favoriteChange = () =>{
        onFavoriteChange(id)
    }

    const propsFavoriteIcon = {
        size:25,
        onClick: favoriteChange
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
                <div className='favorite'>
                    {favorite 
                    ? <AiFillHeart {...propsFavoriteIcon} color='#FF0000' />
                    : <AiOutlineHeart {...propsFavoriteIcon}/>
                    }
                </div>
            </div>

        </div>


    )
}


export default Card;