import { BrowserRouter, useParams, Route, Routes, react-router-dom, } from 'react-router-dom';
import data from './data.json';
import { Component, useEffect } from 'react';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function RecipeDetail() {
	const json = await data.json();
	}
	return (
		<img src="image"/>
		<div>
		<h1>Ingredients</h1>
		</div>
		<div><h1>instructions<h1></div>
	);
};
