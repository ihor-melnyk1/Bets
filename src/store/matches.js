import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'matches',
  initialState: {
    matches: [],
    filtered: [],
    pageItems: [],
    countries: [],
    isLoaded: false,
    isFound: true,
    isBlured: false,
    page: 1,
    lastPage: 1,
    pageSize: 10,
    error: null,
  },
  reducers: {
    setMatches: (state, action) => ({
      ...state,
      matches: action.payload,
    }),
    setFiltered: (state, action) => ({
      ...state,
      filtered: action.payload,
    }),
    setPageItems: (state, action) => ({
      ...state,
      pageItems: action.payload,
    }),
    setCountries: (state, action) => ({
      ...state,
      countries: action.payload,
    }),
    setIsLoaded: (state, action) => ({
      ...state,
      isLoaded: action.payload,
    }),
    setIsFound: (state, action) => ({
      ...state,
      isFound: action.payload,
    }),
    setIsBlured: (state, action) => ({
      ...state,
      isBlured: action.payload,
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setLastPage: (state, action) => ({
      ...state,
      lastPage: action.payload,
    }),
    setPageSize: (state, action) => ({
      ...state,
      pageSize: action.payload,
    }),
  }
});

export const {setMatches,setFiltered,setPageItems,setCountries,setIsLoaded,setIsFound,setIsBlured,setPage,setLastPage,setPageSize} = slice.actions;

export const getMatches = state => state.matches.matches;
export const getFiltered = state => state.matches.filtered;
export const getPageItems = state => state.matches.pageItems;
export const getCountries = state => state.matches.countries;
export const getIsLoaded = state => state.matches.isLoaded;
export const getIsFound = state => state.matches.isFound;
export const getIsBlured = state => state.matches.isBlured;
export const getPage = state => state.matches.page;
export const getLastPage = state => state.matches.lastPage;
export const getPageSize = state => state.matches.pageSize;

export default slice.reducer;