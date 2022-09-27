import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
	const counter = useSelector((state) => state.pokemon.counter)

	return (
		<div className="Navbar">
			<h2>Pokémons</h2>
			<h4>Capturés : {counter}</h4>
		</div>
	)
}

export default Navbar