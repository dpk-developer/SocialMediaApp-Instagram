import { FeedItem } from '../models/Feed';

export const generateMockFeedItems = (count: number = 20): FeedItem[] => {
    const mockFeedItems: FeedItem[] = [];

    for (let i = 0; i < count; i++) {
        const item: FeedItem = {
            id: `${i}`,
            username: `user_${i}`,
            avatar: `https://randomuser.me/api/portraits/men/${i}.jpg`,
            mediaUri: i % 2 === 0 ? `https://picsum.photos/id/${i}/400/400` : `https://www.w3schools.com/html/mov_bbb.mp4`,
            mediaType: i % 2 === 0 ? 'image' : 'video',
            description: `This is post ${i}`,
            liked: false,
            date: new Date().toISOString(),
        };
        mockFeedItems.push(item);
    }

    return mockFeedItems;
};