import { useDispatch } from 'react-redux';
import { createPost } from '../store/slices/postSlice';
import { Post } from '../models/Post';

export const usePostViewModel = () => {
    const dispatch = useDispatch();

    const submitPost = (post: Post) => {
        dispatch(createPost(post));
    };

    return {
        submitPost,
    };
};