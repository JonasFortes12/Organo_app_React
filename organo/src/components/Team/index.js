import "./Team.css";

const Team = (props) => {
  const styleSection = {
    backgroundColor: props.secondaryColor,
  }

  const styleH3 = {
    borderColor: props.primaryColor
  }

  return (
    <section className="team" style={styleSection}>
      <h3 style={styleH3}>{props.teamName}</h3>
    </section>
  );
};

export default Team;
