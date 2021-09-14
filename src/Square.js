import React from "react";
import "./styles.css";



const renderSquare = (cell) => {
	// if (x === xValue && y === yValue) {
	// 	if (blackSquare) {
	// 		// console.log("this is a black square");
	// 		return <button className="blacksquare"></button>;
	// 	}

	// 	return <button className="square"></button>;
	// }
  if(cell.type){
    return <button className="blacksquare"></button>;
  }
  
  return <button className="square"></button>;
};

const Square = ({ cell }) => {
  console.log(cell);
	return <React.Fragment>{renderSquare(cell)}</React.Fragment>;
};

export default Square;
