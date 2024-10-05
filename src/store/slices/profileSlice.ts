import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '../../models/Profile';

const initialState: Profile = {
    username: 'john_doe',
    bio: 'Developer | Traveler',
    avatar: 'https://example.com/avatar.jpg',
    followers: 120,
    posts: ['post1', 'post2'],
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export default profileSlice.reducer;