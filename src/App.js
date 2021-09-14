import React from "react";
import Grid from "./Grid";
import ClueView from './ClueView';
import crossWordData from "./cross-wordpuzzle.json";

const cells = crossWordData.cells;
const clues = crossWordData.clues;
const meta = crossWordData.meta

const App = () => {
	return (
		<div>
			<Grid cells={cells} />
      <p>{meta.creator}</p>
      <ClueView clues={clues}/>
		</div>
	);
};

export default App;
