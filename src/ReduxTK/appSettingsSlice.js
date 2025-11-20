import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: "ar",
}

const appSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        changeLang(state) {
            if (state.lang == "en")
                state.lang = "ar";
            else
                state.lang = "en";
        }
    }
})

export const { changeLang } = appSettingsSlice.actions
export default appSettingsSlice.reducer