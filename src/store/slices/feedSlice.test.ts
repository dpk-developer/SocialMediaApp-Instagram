import feedReducer, { addFeedItems, likePost } from './feedSlice';
import { FeedItem, FeedState } from '../../models/Feed';

describe('feedSlice', () => {
    it('should add feed items', () => {
        const initialState: FeedState = { items: [], loading: false };
        const feedItems: FeedItem[] = [
            {
                id: '1',
                username: 'test',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                mediaUri: 'https://randomuser.me/api/portraits/men/1.jpg',
                mediaType: 'image',
                description: 'This is a sample post.',
                liked: false,
                date: new Date().toISOString(),
            },
        ];

        const newState = feedReducer(initialState, addFeedItems(feedItems));
        expect(newState.items.length).toBe(1);
    });

    it('should toggle like state of a post', () => {
        const initialState: FeedState = {
            items: [
                {
                    id: '1',
                    username: 'test',
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

        const newState = feedReducer(initialState, likePost('1'));
        expect(newState.items[0].liked).toBe(true);
    });
});