import { useState, useEffect } from 'react';
import data from './data.json';

function HomePage() {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<div className="Homepage lg:W-2/3 sm:W-1/4 hover:bg-green-300 ">
		<img src="Image" alt="user" />
		<h1>Home Page</h1>
		</div>
	);
}

export default HomePage;
