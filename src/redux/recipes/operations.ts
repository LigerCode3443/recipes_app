import { createAsyncThunk } from "@reduxjs/toolkit";
import { recipesApi } from "../../config/recipesApi";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const getRecipes = createAsyncThunk(
  "get/recipes",
  async (query, thunkApi) => {
    try {
      const { data } = await recipesApi.get(`search.php?s=${query}`);
      thunkApi.dispatch(getCategories());
      return data.meals;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      }
      toast.error("Failed request");
      return thunkApi.rejectWithValue("Failed request");
    }
  }
);

export const getCategories = createAsyncThunk(
  "get/categories",
  async (_, thunkApi) => {
    try {
      const { data } = await recipesApi.get("categories.php");

      return data.categories;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      }
      toast.error("Failed request");
      return thunkApi.rejectWithValue("Failed request");
    }
  }
);

export const getFilterCategoric = createAsyncThunk(
  "get/filter/categoric",
  async (query, thunkApi) => {
    try {
      const { data } = await recipesApi.get(`filter.php?c=${query}`);

      return data.meals;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      }
      toast.error("Failed request");
      return thunkApi.rejectWithValue("Failed request");
    }
  }
);

export const getRecipeById = createAsyncThunk(
  "get/recipe/id",
  async (id, thunkApi) => {
    try {
      const { data } = await recipesApi.get(`lookup.php?i=${id}`);

      return data.meals[0];
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      }
      toast.error("Failed request");
      return thunkApi.rejectWithValue("Failed request");
    }
  }
);
export const getRecipeByIdFavorites = createAsyncThunk(
  "get/recipe/favorites/id",
  async (id, thunkApi) => {
    try {
      const { data } = await recipesApi.get(`lookup.php?i=${id}`);

      return data.meals[0];
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      }
      toast.error("Failed request");
      return thunkApi.rejectWithValue("Failed request");
    }
  }
);
