import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:'movies',
        initialState: {
           NowPlayingMovies:null,
           trailerVideo:null,
           PopularMovies:null,
           TopRatedMovies:null,
           UpComingMovies:null,
           TrendingMovies:null,
        },
        reducers:{
            addNowPlayingMovies: (state,action) => {
               state.NowPlayingMovies=action.payload;
            },
            addTrailerVideo: (state,action)=> {
              state.trailerVideo=action.payload;
            },
            addPopularMovies: (state,action) => {
                state.PopularMovies=action.payload;
             },
             addTopRatedMovies: (state,action) => {
                state.TopRatedMovies=action.payload;
             },
             addUpComingMovies: (state,action) => {
                state.UpComingMovies=action.payload;
             },
             addTrendingMovies: (state,action) => {
                state.TrendingMovies=action.payload;
             },
          
        }
    }
);
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies,addTrendingMovies}=movieSlice.actions;
export default movieSlice.reducer;