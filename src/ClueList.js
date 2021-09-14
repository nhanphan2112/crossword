import React from "react";
import Clue from "./Clue";

const ClueList = ({ clues }) => {
	return (
		<ul>
			{clues.map((clue) => (
				<Clue text={clue.text} number={clue.number} />
			))}
		</ul>
	);
};

export default ClueList;
