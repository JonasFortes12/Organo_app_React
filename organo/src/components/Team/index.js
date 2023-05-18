import "./Team.css";
import Card from "../Card";

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
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default Team;
