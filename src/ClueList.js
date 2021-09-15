import React from "react";
import Clue from "./Clue";

const ClueList = ({ clues }) => {
	return (
		<ul>
			{clues.map((clue) => (
				<Clue key={clue.text} 
              text={clue.text} 
              number={clue.number} 
        />
			))}
		</ul>
	);
};

export default ClueList;
