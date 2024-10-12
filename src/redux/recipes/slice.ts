import { Id } from "./../../../node_modules/@reduxjs/toolkit/src/query/tsHelpers";
import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getFilterCategoric,
  getRecipeById,
  getRecipeByIdFavorites,
  getRecipes,
} from "./operations";

const initialState = {
  recipes: [],
  favoritesRecipes: [],
  categories: [],
  recipe: null,
  fullRecipesFavorites: [],
};

const slice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const recipe = action.payload;
      if (
        state.favoritesRecipes.some((item) => item.idMeal === recipe.idMeal)
      ) {
        state.favoritesRecipes = state.favoritesRecipes.filter(
          (item) => item.idMeal !== recipe.idMeal
        );
      } else {
        state.favoritesRecipes.push(recipe);
      }
    },
    clearFullRecipes(state) {
      state.fullRecipesFavorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getFilterCategoric.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipe = action.payload;
      })
      .addCase(getRecipeByIdFavorites.fulfilled, (state, action) => {
        state.fullRecipesFavorites.push(action.payload);
      });
  },
});

export const recipesReducer = slice.reducer;
export const { toggleFavorite, clearFullRecipes } = slice.actions;
