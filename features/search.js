import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	search: "",
	coinToSearch: [{name: "bitcoin"}],
}

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
		setCoinToSearch: (state, action) => {
			state.coinToSearch = action.payload
		},
	}
})

export const { setSearch, setCoinToSearch } = searchSlice.actions

export default searchSlice.reducer