import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		arrayPoke: [],
		selectedPoke : '',
		counter: 0
	},
	reducers: {
		pokePush: (state, action) => {
			state.arrayPoke = [...action.payload].map((el) => {
				el.captured = false
				return el
			})
		},
		pokeSelect: (state, action) => {
			state.selectedPoke = action.payload
		},
		/* eslint-disable-next-line */
		pokeCapture: (state, action) => {
			state.arrayPoke = [...state.arrayPoke].map((el) => {
				if (el.pokedex_number === action.payload.pokedex_number) {
					el.captured = !el.captured
				}
				return el
			})
		},
		pokeCount: (state, action) => {
			if (action.payload.captured) {
				state.counter -= 1
			} else {
				state.counter += 1
			}
			
		}
	}
})

export const { pokePush, pokeSelect, pokeCapture, pokeCount } = pokemonSlice.actions

export default pokemonSlice.reducer