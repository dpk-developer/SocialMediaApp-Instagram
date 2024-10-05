import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedItem, FeedState } from '../../models/Feed';

const initialState: FeedState = {
    items: [
        {
            id: '1',
            username: 'testuser',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            mediaUri: 'https://randomuser.me/api/portraits/men/1.jpg',
            mediaType: 'image',
            description: 'This is a sample post.',
            liked: false,
            date: new Date().toISOString(),
        },
    ],
    loading: false,
};

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        addFeedItems: (state, action: PayloadAction<FeedItem[]>) => {
            state.items.push(...action.payload);
        },
        likePost: (state, action: PayloadAction<string>) => {
            const post = state.items.find(item => item.id === action.payload);
            if (post) {
                post.liked = !post.liked;
            }
        },
    },
});

export const { addFeedItems, likePost } = feedSlice.actions;
export default feedSlice.reducer;