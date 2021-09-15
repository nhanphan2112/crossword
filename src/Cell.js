import React, {useState} from "react";
import "./styles.css";



const Cell = ({ cell }) => {
  const [bgColor, changeBGColor] = useState("#fff");

	return <React.Fragment>
            {renderCell(cell, bgColor, changeBGColor)}
          </React.Fragment>;
};


const renderCell = (cell, bgColor, changeBGColor) => {
	if (cell.type) {
		return <button className="blacksquare"></button>;
	}

	return (
		<div className="placeholder" data-placeholder={cell.number}>
			<input className="square" 
              maxLength="1" 
              style={{backgroundColor: bgColor}}
              onClick={()=> changeBGColor("#FFF595")}
              onBlur={(e) => {handleChange(e, changeBGColor, cell)}}
              // onChange={(e) => {handleChange(e, changeBGColor, cell)}}
      >
      </input>
		</div>
	);
};


const handleChange = (e, changeBGColor, cell) => {
  const userInput = e.target.value.toUpperCase();
  console.log(userInput);
  if(userInput === cell.solution ){
    changeBGColor('#BFF4BF');
  }
  else{
    changeBGColor('white');
  }
}




export default Cell;
