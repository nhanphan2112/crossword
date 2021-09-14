import React from "react";
import "./styles.css";

const renderCell = (cell) => {
	if (cell.type) {
		return <button className="blacksquare"></button>;
	}

	return <input className="square" maxLength="1" placeholder={cell.number}></input>;
};

const Cell = ({ cell }) => {
	return <React.Fragment>{renderCell(cell)}</React.Fragment>;
};

export default Cell;
