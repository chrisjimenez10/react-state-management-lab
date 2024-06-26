
const Team = (props) => {
    const {fighters, index, team, setTeam, money, setMoney, totalStrength, setTotalStrength, totalAgility, setTotalAgility, setAddedFighterMessage} = props;

    //---------- Event Handler ----------\\

    const handleRemoveFighter = (fighter, index) => {
        //Initially I was confused and not deleting the selected fighter beceause of parameter naming between the parameters in the event handler and the filter method - the return statement is saying "Filter out and return a new array that DOES NOT have the element we CLICKED based on its index value(acting as its id for the DOM)"
        const reducedTeam = [...team].filter((subfighter, subindex)=>{
          return index !== subindex;
        });
        setTeam(reducedTeam);
        setMoney(money + fighter.price);
        setTotalStrength(totalStrength - fighter.strength);
        setTotalAgility(totalAgility - fighter.agility);
        setAddedFighterMessage(`Removed ${fighter.name} from the team`);
        console.log(fighter, index);
      };

    return (
            <ul>
              <li>
              <img src={fighters.img} alt={fighters.name}/>
                <h4><span style={{color: "lightgray"}}>{fighters.name}</span></h4>
                <h4>Price: <span style={{color: "green"}}>${fighters.price}</span></h4>
                <h4>Strength: <span style={{color: "orange"}}>{fighters.strength}</span></h4>
                <h4>Agility: <span style={{color: "cyan"}}>{fighters.agility}</span></h4>
                <button id="remove-btn" onClick={()=> handleRemoveFighter(fighters, index)}>Remove</button>
              </li>
            </ul>
          )
};

export default Team;