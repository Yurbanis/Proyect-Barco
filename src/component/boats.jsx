import React, { useState } from "react";
import "../App.css";

const Boats = () => {
    const [shiprows, setShiprows] = useState(0);
    const [shipcolumns, setShipcolumns] = useState(0);
	
     const Ships = () => {
        let rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        let columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   
        let randomRows = Math.floor(Math.random() * rows.length);
        let randomColumns = Math.floor(Math.random() * columns.length);

        console.log(randomRows);
        console.log(randomColumns);

        if (rows[randomColumns] === rows || columns[randomRows] === columns) {
            document.getElementById("fire").style.color = "#256d7b";
            document.getElementById("water").style.color = "#DC143C";
        }
   
		setShiprows(randomRows);
        setShipcolumns(randomColumns);

        console.log(randomRows)
        console.log(randomColumns)
	};



	 const ship = {
	 	 "shipTypes": {
	     "carrier": { "size": 5, "count": 1 },
	     "battleship": { "size": 4, "count": 1 },
	     "cruiser": { "size": 3, "count": 1 },
	     "submarine": { "size": 3, "count": 1 },
	     "destroyer": { "size": 2, "count": 1 },
	   },
	 }

	return (
		<div>
            <div className="row">
				<h1 className="col" style={{ color: "blue" }}>
					<i className="fas fa-bullseye"></i> {shiprows} - {shipcolumns}
				</h1>
			</div>
			<button type="button" className="btn btn-success btn-lg" onClick={Ships}>
				Mostar mis barcos
			</button>
		</div>
	);
};

export default Boats;