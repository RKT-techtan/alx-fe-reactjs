import AddRecipeForm from './AddRecipeForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import HomePage from './HomePage';
import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App;
