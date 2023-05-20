import "./Team.css";
import Card from "../Card";

const Team = (props) => {
  const styleSection = {
    backgroundColor: props.secondaryColor,
  };

  const styleH3 = {
    borderColor: props.primaryColor,
  };

  return (
    (props.collaborators.length > 0) && <section className="team" style={styleSection}>
      <h3 style={styleH3}>{props.teamName}</h3>
      <div className="cardCollaborator">
        {props.collaborators.map((collaborator) => (
          <Card
            name={collaborator.name}
            role={collaborator.role}
            imageLink={collaborator.imageLink}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
