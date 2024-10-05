import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addFeedItems, likePost } from '../store/slices/feedSlice';
import { FeedItem } from '../models/Feed';
import { generateMockFeedItems } from '../mockData/mockData';

export const useFeedViewModel = () => {
    const dispatch = useDispatch();
    const feed = useSelector((state: RootState) => state.feed.items);

    const loadMoreFeedItems = () => {
        const newItems: FeedItem[] = generateMockFeedItems(20);
        dispatch(addFeedItems(newItems));
    };

    const toggleLikePost = (id: string) => {
        dispatch(likePost(id));
    };

    return {
        feed,
        loadMoreFeedItems,
        toggleLikePost,
    };
};