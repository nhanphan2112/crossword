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
              onClick={()=> changeBGColor("yellow")}
              onChange={handleChange}
      >
      </input>
		</div>
	);
};

const handleChange = () => {
  console.log("change");
}




export default Cell;
