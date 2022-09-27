import React from 'react'
import { useDispatch } from 'react-redux'
import { pokeSelect } from '../../store/pokemonSlice'

import './PokemonCard.css'

const PokemonCard = ({ pokemon = {}}) => {
	const dispatch = useDispatch()
    
	function selectPokemon(el) {
		dispatch(pokeSelect(el))
	}

	return (
		<div className="Card" onClick={() => selectPokemon(pokemon)}>
			<div>{pokemon.name}</div>
			<div>{pokemon.hp}</div>
			<div>{pokemon.type1}</div>
			<div>{pokemon.type2}</div>
		</div>
	)
}

export default PokemonCard