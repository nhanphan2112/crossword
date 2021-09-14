import React from "react";
import ClueList from "./ClueList";


const ClueView = ({ clues }) => {

  const acrossClues = clues.filter((clue) => clue.direction === 0);
  const downClues = clues.filter((clue) => clue.direction === 1);
	
	return (
		<React.Fragment>
			<h3>Across</h3>
      <ClueList clues={acrossClues}/>

			<h3>Down</h3>
      <ClueList clues={downClues}/>
		</React.Fragment>
	);
};

export default ClueView;
