import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes=createAsyncThunk('reipes/fetchAllRecipes',async()=>{
     const result=   await axios.get("https://dummyjson.com/recipes")

     sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
    //  console.log(result);
     return result.data.recipes
     
})

const recipeSlice=createSlice({
    name:'reipes',
    initialState:{
        allrecipes:[],
        dummyAllrecipes:[],
        loading:false,
        error:""
    },
    reducers:{
        searchRecipes:(state,searchKeyFromheader)=>{
           state.allrecipes= state.dummyAllrecipes.filter(item=>item.cuisine.toLowerCase().includes(searchKeyFromheader.payload))
        }

    },
    extraReducers:(builder)=>{
            builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
                    state.allrecipes=apiResult.payload
                    state.dummyAllrecipes=apiResult.payload
                    state.loading=false
                    state.error=""
            })

            builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
                state.allrecipes=[]
                state.dummyAllrecipes=[]
                state.loading=true
                state.error=""
        })

        builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
            state.allrecipes=[]
            state.dummyAllrecipes=[]
            state.loading=false
            state.error="an error found"
    })


    }
})

export const {searchRecipes}= recipeSlice.actions
export default recipeSlice.reducer