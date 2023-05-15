import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	labels: ["0 pm", "3 pm", "6 pm", "9 pm", "12 am", "2 am", "5 am", "8 am", "11 am"],
}

export const labelsSlice = createSlice({
	name: "labels",
	initialState,
	reducers: {
		setLabels: (state, action) => {
			state.labels = action.payload
		},
	}
})

export const { setLabels } = labelsSlice.actions

export default labelsSlice.reducer