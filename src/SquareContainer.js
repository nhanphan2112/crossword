import React from "react";
import "./styles.css";
import Square from "./Square";
import crossWordData from "./data.json";

const cells = crossWordData.cells;

const SquareContainer = () => {
	const grid = [];

	for (let row = 0; row < 15; row++) {
		grid.push([]);
		for (let col = 0; col < 15; col++) {
			grid[row].push(<Square key={`${col}${row}`} cell={cells[15 * row + col]} />);
		}
	}

	return <div className="grid-board">{grid}</div>;
};

export default SquareContainer;
