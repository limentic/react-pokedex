import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pokeCapture, pokeCount } from '../../store/pokemonSlice'
import './PokemonViewer.css'

const PokemonViewer = () => {
	const selectedPoke = useSelector((state) => state.pokemon.selectedPoke)
	const dispatch = useDispatch()

	function capturePokemon(el) {
		dispatch(pokeCapture(el))
		dispatch(pokeCount(el))
	}

	let pokemonJSX = (el) => {
		if (el === '') {
			return <div>Aucun pokemon selectionné</div>
		} else {
			return (
				<div className="Attributes">
					<div>{el.pokedex_number}</div>
					<div>{el.name}</div>
					<div>{el.hp}</div>
					<div>{el.abilities}</div>
					<div>{el.sp_attack}</div>
					<div>{el.sp_defense}</div>
					<div>{el.speed}</div>
					<div>{el.type1}</div>
					<div>{el.type2}</div>

					{el.captured === true ? (
						<button onClick={() => capturePokemon(el)}>
              Capturé ! (relacher)
						</button>
					) : (
						<button onClick={() => capturePokemon(el)}>Capturer</button>
					)}
				</div>
			)
		}
	}

	return pokemonJSX(selectedPoke)
}

export default PokemonViewer
