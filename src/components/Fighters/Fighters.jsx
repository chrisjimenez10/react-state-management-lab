
const Fighters = (props) => {
    const {fighters, team, setTeam, money, setMoney, totalStrength, setTotalStrength, totalAgility, setTotalAgility, setAddedFighterMessage} = props;

    //---------- Event Handler ----------\\
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


    return (
          <ul>
            <li>
              <img src={fighters.img}/>
              <h4><span style={{color: "lightgray"}}>{fighters.name}</span></h4>
              <h4>Price: <span style={{color: "green"}}>${fighters.price}</span></h4>
              <h4>Strength: <span style={{color: "orange"}}>{fighters.strength}</span></h4>
              <h4>Agility: <span style={{color: "cyan"}}>{fighters.agility}</span></h4>
              <button id="add-button" onClick={()=> handleAddFighter(fighters)}>Add</button>
            </li>
          </ul>
    )
};

export default Fighters;