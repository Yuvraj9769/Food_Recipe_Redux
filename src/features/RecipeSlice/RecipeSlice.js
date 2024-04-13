import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  loading: false,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchRecipies: (state, action) => {
      if (!state.loading) {
        state.recipes.push(...action.payload);
      }
      state.loading = true;
    },
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
  },
});

export const { addRecipe, fetchRecipies } = recipeSlice.actions;
export default recipeSlice.reducer;
