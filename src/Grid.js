import React from "react";
import "./styles.css";
import Cell from "./Cell";

const Grid = ({ cells }) => {
	const grid = [];

	for (let row = 0; row < 15; row++) {
		grid.push([]);
		for (let col = 0; col < 15; col++) {
			grid[row].push(<Cell key={`${col}${row}`} cell={cells[15 * row + col]} />);
		}
	}

	return (
		<div>
			<div className="grid-board">{grid}</div>
    
		</div>
	);
};

export default Grid;
