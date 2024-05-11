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
 
  //Event Handlers
  const handleAddFighter = (fighter) => {
      const newTeam = [...team, fighter] // Following React principles of state variable immutability, we create a copy of the state and add the new ojbect to the array
      if(money < fighter.price){ //Logic to check state of money - if money is less than the price of a fighter, then we exit from function and fighter is NOT added 
        console.log("Not enough money");
        return; //NOTE: If we don't exit from function with return statement, we can add one more fighter even if money is less than fighter price because we would be updating money state before checking if there is sufficient money
      }else{
        setTeam(newTeam);
        setMoney(money - fighter.price); //Subtracts fighter price from state variable by using the setMoney state setter function to update state variable
      }
      console.log(newTeam, money)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: </h3>
      <h3>Team Agility: </h3>
      <h3>Team: {team.length === 0 ? "Pick some team members!" : message}</h3>
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
              <button id="button" onClick={()=> handleAddFighter(zombieFighter)}>Add</button>
            </li>
          </ul>
        )
      })}
      </div>
    </>
  );
}

export default App

