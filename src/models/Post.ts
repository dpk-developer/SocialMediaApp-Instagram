export interface Post {
    title: string;
    description: string;
    mediaUri: string;
    mediaType: 'image' | 'video';
};

export interface PostState {
    posts: Post[];
};