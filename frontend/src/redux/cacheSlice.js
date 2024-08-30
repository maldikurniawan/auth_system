import { createSlice } from "@reduxjs/toolkit";

export const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        getCacheResult: false,
        getCacheLoading: false,
        getCacheError: false,
        addCacheResult: false,
        addCacheLoading: false,
        deleteCacheResult: false,
    },
    reducers: {
        cacheReducers: (state, action) => {
            const { type, payload } = action.payload;
            switch (type) {
                case "GET_CACHE":
                    return {
                        ...state,
                        getCacheResult: payload.data,
                        getCacheLoading: payload.loading,
                        getCacheError: payload.error,
                    };
                case "ADD_CACHE":
                    return {
                        ...state,
                        addCacheResult: payload.data,
                        addCacheLoading: payload.loading,
                    };
                case "DELETE_CACHE":
                    return {
                        ...state,
                        deleteCacheResult: payload.data,
                    };
                default:
                    return state;
            }
        },
    },
});

export const { cacheReducers } = cacheSlice.actions;

export default cacheSlice.reducer;