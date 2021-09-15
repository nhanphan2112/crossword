import React from "react";
import "./styles.css";
import ClueList from "./ClueList";


const ClueView = ({ clues }) => {

  const acrossClues = clues.filter((clue) => clue.direction === 0);
  const downClues = clues.filter((clue) => clue.direction === 1);
	
	return (
		<React.Fragment>
			<h4>Across</h4>
      <div className="cluelist"><ClueList clues={acrossClues}/></div>

			<h4>Down</h4>
      <div className="cluelist"><ClueList clues={downClues}/></div>
		</React.Fragment>
	);
};

export default ClueView;
