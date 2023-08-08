import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./translateSlice";

const Store = configureStore({
  reducer: {
    translateState: translateSlice,
  },
});

export default Store;
