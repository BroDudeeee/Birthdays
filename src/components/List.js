import Person from "./Person";
import "../styles.css";
import { useEffect, useState } from "react";

const List = () => {
  const people = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jack Sparrow",
      age: 29,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Micheal Jackson",
      age: 37,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Joey Tribbiani",
      age: 25,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Chandler Bing",
      age: 36,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sean Walsh",
      age: 32,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Monica Geller",
      age: 34,
    },
  ];

  const [allPeople, setAllPeople] = useState([]);

  useEffect(() => {
    setAllPeople(people);
  }, []);

  const clearAll = () => {
    setAllPeople([]);
  };
  return (
    <div className="list">
      <h1>{allPeople.length} birthdays today</h1>
      {allPeople.map((person) => (
        <Person {...person} key={person.id} />
      ))}
      <button className="clearBtn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default List;
