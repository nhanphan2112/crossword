import React from "react";
import "./styles.css";
import Square from "./Square";

const SquareContainer = () => {
	const grid = [];

	for (let row = 0; row < 15; row++) {
		grid.push([]);
		for (let col = 0; col < 15; col++) {
			grid[row].push(<Square key={`${col}${row}`} />);
		}
	}

  const renderGrid = () =>{
    for (let row = 0; row < 15; row++) {
      
      for (let col = 0; col < 15; col++) {
        <Square key={`${col}${row}`} />;
        continue;
      }
    }
  }


	return <div className="grid-board">{grid}</div>;
};

export default SquareContainer;
