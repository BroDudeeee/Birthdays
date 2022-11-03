import "../styles.css";

const Person = ({ img, name, age }) => {
  return (
    <div className="person">
      <img src={img} alt="person" />
      <div className="nameAge">
        <h4 className="name">{name}</h4>
        <p className="age">{age} Years</p>
      </div>
    </div>
  );
};

export default Person;
