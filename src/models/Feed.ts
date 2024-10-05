export interface FeedItem {
    id: string;
    username: string;
    avatar: string;
    mediaUri: string;
    mediaType: 'image' | 'video';
    description: string;
    liked: boolean;
    date: string;
};

export interface FeedState {
    items: FeedItem[];
    loading: boolean;
};  