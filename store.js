import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import searchSlice from "./features/search"
import labelsSlice from "./features/labels"
import balanceSlice from "./features/balance"
import filterSlice from "./features/filter"

export const store = configureStore({
	reducer: {
		search: searchSlice,
		labels: labelsSlice,
		balance: balanceSlice,
		filter: filterSlice
	}
})

export default store 

setupListeners(store.dispatch)