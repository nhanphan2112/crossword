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
      <ClueView clues={clues}/>
      <br style={{clear:"both"}} />
      <p>{meta.title} | {meta.creator}</p>
		</div>
	);
};

export default App;
