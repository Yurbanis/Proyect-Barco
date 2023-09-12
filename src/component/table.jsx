import React, { useState } from "react";
import "../App.css";

const Table = () => {
	const [count, setCount] = useState(0);
	//const [color, setColor] = useState("red");

	const increase = () => {
		setCount(count + 1);
		console.log(count + 1);
	};

	//  const changeColor = () => {
    //         setColor(color);
    //     	console.log(color);
    //     };

    //     let rows = 9;
    //     let columns = 9;
    //     let gameSize = 81;


    //     let board = [
    //     	[1, 1, 1, 1, 0, 0, 0, 0, 0],
    //     	[0, 0, 0, 0, 0, 0, 0, 1, 1],
    //     	[0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     	[0, 0, 0, 0, 0, 0, 1, 0, 0],
    //     	[0, 0, 0, 0, 0, 0, 1, 0, 0],
    //     	[0, 1, 0, 0, 0, 0, 1, 0, 0],
    //     	[0, 1, 0, 0, 0, 0, 0, 0, 0],
    //     	[0, 1, 0, 0, 0, 0, 0, 0, 0],
    //     	[0, 0, 0, 1, 1, 1, 1, 1, 0],
    //     	[0, 0, 0, 0, 0, 0, 0, 0, 0]
    //     ];

        if (count === 17) {
        	alert("Felicitaciones, ganaste");
        } else if (count > 30) {
        	alert("Lamento que hayas perdido, inténtalo de nuevo.");
         }
       

	return (
		<div className="container">
			<div className="row">
				<h1 className="col" style={{ color: "red" }}>
					<i className="fas fa-bullseye"></i> {count}
				</h1>
			</div>
			<div className="row line">
				<div className="col-xs col-sm col-md col-lg grid">
					<i
						className="fas fa-ship"
						style={{ marginRight: "10px" }}></i>
				</div>
				<div className="col-xs col-sm col-md col-lg grid">1</div>
				<div className="col-xs col-sm col-md col-lg grid">2</div>
				<div className="col-xs col-sm col-md col-lg grid">3</div>
				<div className="col-xs col-sm col-md col-lg grid">4</div>
				<div className="col-xs col-sm col-md col-lg grid">5</div>
				<div className="col-xs col-sm col-md col-lg grid">6</div>
				<div className="col-xs col-sm col-md col-lg grid">7</div>
				<div className="col-xs col-sm col-md col-lg grid">8</div>
				<div className="col-xs col-sm col-md col-lg grid">9</div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">A</div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">B</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">C</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">D</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">E</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">F</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">G</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">H</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid ship"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
			<div className="row line" onClick={increase}>
				<div className="col-xs col-sm col-md col-lg grid">I</div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
				<div className="col-xs col-sm col-md col-lg grid"></div>
			</div>
		</div>
	);
};

export default Table;