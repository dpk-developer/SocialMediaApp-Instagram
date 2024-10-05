import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../models/Post';

const initialState: PostState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        createPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
    },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;