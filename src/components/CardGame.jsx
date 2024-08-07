import { useState } from "react";

export default function CardGame() {
	// Hard kodet inn array for bruk i guessing game grid.
	const [grid, setGrid] = useState([
		[1, 3, 2, 4],
		[3, 6, 1, 5],
		[5, 2, 6, 4],
	]);

	// Lager ett nytt array med samme "dimensjon" som grid, setGrid, bare at denne griden er fylt opp med boolean false.
	const [revealedGrid, setRevealedGrid] = useState(
		new Array(grid.length)
			.fill("")
			.map(() => new Array(grid[0].length).fill(false))
	);

	const [previousClick, setPreviousClick] = useState();

	function handleCardClicked(rowIndex, colIndex) {
		const clickedNumber = grid[rowIndex][colIndex];
		const newRevealedGrid = [...revealedGrid];
		newRevealedGrid[rowIndex][colIndex] = true;
		setRevealedGrid(newRevealedGrid);

		if (clickedNumber) {
			setPreviousClick(clickedNumber);
			if (clickedNumber === previousClick) {
				setTimeout(() => {
					console.log("This is a timeout");
				}, 1000);
			} else if (
				previousClick !== undefined ||
				(0 && clickedNumber !== previousClick)
			) {
				setTimeout(() => {
					newRevealedGrid[rowIndex][colIndex] = false;
					setRevealedGrid([...newRevealedGrid]);
				}, 1000);
			}
		}

		console.log(`This is clicked number ${clickedNumber}`);
		console.log(`This is previous number ${previousClick}`);
	}

	return (
		<div className="game-grid">
			{grid.map((row, rowIndex) => (
				<div key={rowIndex} className="row">
					{row.map((number, colIndex) => {
						return (
							<div
								onClick={() => handleCardClicked(rowIndex, colIndex)}
								key={colIndex}
								className="cell"
							>
								{revealedGrid[rowIndex][colIndex] ? number : ""}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
}
