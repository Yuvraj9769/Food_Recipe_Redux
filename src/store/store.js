import { configureStore } from "@reduxjs/toolkit";
import RecipeSliceReducer from "../features/RecipeSlice/RecipeSlice";

export const store = configureStore({
  reducer: RecipeSliceReducer,
});
