import {createSlice} from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        player: []
    },
    reducers: {
        addPlayerToFavorites(state, action) {
            
    },
        removePlayerToFavorites(state, action) {

    }
}
})

export const playerActions = playerSlice.actions
export default playerSlice