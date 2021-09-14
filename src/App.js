import React from "react";
import Square from "./Square";
import SquareContainer from "./SquareContainer";

import Crossword from "@jaredreisinger/react-crossword";

const data = {
	across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
  },
};

const App = () => {
	return<div> <SquareContainer/> </div>;
}

export default App;
