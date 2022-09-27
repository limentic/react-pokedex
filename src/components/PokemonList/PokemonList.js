import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pokePush } from '../../store/pokemonSlice'

import { pokemons$ } from './../../pokemons'

import PokemonCard from '../PokemonCard/PokemonCard'

import './PokemonList.css'

const PokemonList = () => {
	const pokemons = useSelector((state) => state.pokemon.arrayPoke)
	const dispatch = useDispatch()

	useEffect(() => {
		pokemons$
			.then((res) => {
				dispatch(pokePush(res))
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	let pokemonJSX = pokemons.map((el) => {
		return (
			<PokemonCard key={el.pokedex_number} pokemon={el}/>
		)
	})

	return <div className="Master">{pokemonJSX}</div>
}

export default PokemonList
