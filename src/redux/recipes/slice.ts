import { Id } from "./../../../node_modules/@reduxjs/toolkit/src/query/tsHelpers";
import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getRecipes } from "./operations";

const initialState = {
  recipes: [],
  favoritesRecipes: [],
  categories: [],
};

const slice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const recipe = action.payload;
      if (state.favoritesRecipes.some((item) => item.id === recipe.id)) {
        state.favoritesRecipes = state.favoritesRecipes.filter(
          (item) => item.id !== recipe.Id
        );
      } else {
        state.favoritesRecipes.push(recipe);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const recipesReducer = slice.reducer;
