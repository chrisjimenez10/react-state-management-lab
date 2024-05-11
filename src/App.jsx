//Import
import { useState } from "react";
import "./App.css";

//Parent Component
const App = () => {
  //State Variable, State Setter Function, Hook Function(initial state)
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [addedFighterMessage, setAddedFighterMessage] = useState(""); //NOTE: If we want to display messages based on state change, we NEED to create state variables (regular variables declared and assigned within the functions will not render in the UI)
 
  //Event Handlers
  const handleAddFighter = (fighter) => {
      const newTeam = [...team, fighter] // Following React principles of state variable immutability, we create a copy of the state and add the new ojbect to the array
      if(money < fighter.price){ //Logic to check state of money - if money is less than the price of a fighter, then we exit from function and fighter is NOT added 
        console.log("Not enough money");
        return; //NOTE: If we don't exit from function with return statement, we can add one more fighter even if money is less than fighter price because we would be updating money state before checking if there is sufficient money
      }else{
        setTeam(newTeam);
        setMoney(money - fighter.price); //Subtracts fighter price from state variable by using the setMoney state setter function to update state variable
        setTotalStrength(totalStrength + fighter.strength);
        setTotalAgility(totalAgility + fighter.agility);
        setAddedFighterMessage(`Added ${fighter.name} to the team`);
      }
      console.log(newTeam, money)
  };

  const handleRemoveFighter = (mainFighter, mainIndex) => {
    //Initially I was confused and not deleting the selected fighter beceause of parameter naming between the parameters in the event handler and the filter method - the return statement is saying "Filter out and return a new array that DOES NOT have the element we CLICKED based on its index value(acting as its id for the DOM)"
    const reducedTeam = [...team].filter((subFighter, subindex)=>{
      return mainIndex !== subindex;
    });
    setTeam(reducedTeam);
    setMoney(money + mainFighter.price);
    setTotalStrength(totalStrength - mainFighter.strength);
    setTotalAgility(totalAgility - mainFighter.agility);
    setAddedFighterMessage(`Removed ${mainFighter.name} from the team`);
    console.log(mainFighter, mainIndex);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team: {team.length === 0 ? "Pick some team members!" : addedFighterMessage}</h3>
      <div className="team-container">
      {team.map((fighter, index)=>{
        return (
          <ul key={index}>
            <li>
            <img src={fighter.img}/>
              <h4>{fighter.name}</h4>
              <h4>Price: {fighter.price}</h4>
              <h4>Strength: {fighter.strength}</h4>
              <h4>Agility: {fighter.agility}</h4>
              <button id="remove-btn" onClick={()=> handleRemoveFighter(fighter, index)}>Remove</button>
            </li>
          </ul>
        )
      })}
      </div>
      <h3>Fighters</h3>
      <div className="fighters-container">
      {zombieFighters.map((zombieFighter, index)=>{
        return (
          <ul key={index}>
            <li>
              <img src={zombieFighter.img}/>
              <h4>{zombieFighter.name}</h4>
              <h4>Price: {zombieFighter.price}</h4>
              <h4>Strength: {zombieFighter.strength}</h4>
              <h4>Agility: {zombieFighter.agility}</h4>
              <button id="add-button" onClick={()=> handleAddFighter(zombieFighter)}>Add</button>
            </li>
          </ul>
        )
      })}
      </div>
    </>
  );
}

export default App

