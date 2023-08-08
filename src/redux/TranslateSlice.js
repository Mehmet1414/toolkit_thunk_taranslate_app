import { createSlice } from "@reduxjs/toolkit";
import { getAnswer, getLanguages } from "./Actions";

const initialState = {
  languages: [],
  isLoading: true,
  isError: false,
  answer: "",
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: {
    //cevaap bekelrken
    [getLanguages.pending]: (state) => {
      state.isLoading = true;
    },
    // cevap glince
    [getLanguages.fulfilled]: (state, action) => {
      state.languages = action.payload;
      state.isLoading = false;
    },
    // hata olusursa
    [getLanguages.rejected]: (state) => {
      state.isError = true;
    },

    [getAnswer.pending]: (state) => {
      state.isLoading = true;
    },
    [getAnswer.fulfilled]: (state, action) => {
      state.answer = action.payload;
      state.isLoading = false;
    },
    [getAnswer.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export default translateSlice.reducer;
