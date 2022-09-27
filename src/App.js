import React from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import PokemonList from './components/PokemonList/PokemonList'
import PokemonViewer from './components/PokemonViewer/PokemonViewer'

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="Page">
				<PokemonList />
				<PokemonViewer />
			</div>
		</div>
	)
}

export default App
