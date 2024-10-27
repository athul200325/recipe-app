import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeslice'

const recipeStore=configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})

export default recipeStore