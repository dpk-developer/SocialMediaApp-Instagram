import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useProfileViewModel = () => {
    const userProfile = {
        username: 'Deepak Batham',
        bio: 'Never Stop!',
        followers: '100M',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    };

    const noOfPost = useSelector((state: RootState) => state.post.posts);

    return {
        userProfile,
        noOfPost,
    };
};
