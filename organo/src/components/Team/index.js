import "./Team.css";
import Card from "../Card";
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
  
  
  const styleSection = {
    backgroundColor: hexToRgba(props.color, 0.4)
  };

  const styleH3 = {
    borderColor: props.color,
  };

  return (
    (props.collaborators.length > 0) && <section className="team" style={styleSection}>
      <input 
      type="color" 
      value={props.color} 
      onChange={(event)=>{
        props.onChangeTeamsColor(event.target.value, props.teamId)
      }}
      ></input>
      
      <h3 style={styleH3}>{props.teamName}</h3>
      <div className="cardCollaborator">
        {props.collaborators.map((collaborator, index) => {
          return (
            <Card
              key={index}
              name={collaborator.name}
              role={collaborator.role}
              favorite={collaborator.favorite}
              id={collaborator.id}
              imageLink={collaborator.imageLink}
              colorHeader={props.color}
              onDelete={props.onDeleteCard}
              onFavoriteChange={props.onFavoriteChange}
            ></Card>
          )
        })}
      </div>
    </section>
  );
};

export default Team;
