import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerVideo:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        TrendingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies:(state,action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action) => {
            state.UpcomingMovies = action.payload;
        },
        addPopularMovies:(state,action) => {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.TrendingMovies = action.payload;
        },
    }

})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrendingMovies} =movieSlice.actions;
export default movieSlice.reducer;