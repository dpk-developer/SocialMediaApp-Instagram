import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './slices/feedSlice';
import postReducer from './slices/postSlice';
import profileReducer from './slices/profileSlice';

export const store = configureStore({
    reducer: {
        feed: feedReducer,
        post: postReducer,
        profile: profileReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;