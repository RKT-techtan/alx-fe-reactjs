import { useState, useEffect } from 'react';
import data from './data.json';

function HomePage() {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		{HomePage.map((Homepage)=>
			<input
			type="text rounded-md shadow-md"
			/>
		);
		<div className="Homepage lg:W-2/3 sm:W-1/4 hover:bg-green-300 grid grid-cols-1 grid-cols-2 grid-cols-3 ">
		<img src="Image lg:w-2/3" alt="user hover:bg-green-300" />
		<h1>Home Page</h1>
		</div>
	);
}

export default HomePage;
