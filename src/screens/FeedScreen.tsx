import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/store';
import FeedItem from '../components/FeedItem';
import { FeedItem as IFeedItem } from '../models/Feed';
import { useFeedViewModel } from '../viewmodels/FeedViewModel';
import { RootStackNavigation } from '../types/NavigationTypes';
import { Post } from '../models/Post';

const FeedScreen = () => {
    const navigation = useNavigation<RootStackNavigation>();
    const feed = useSelector((state: RootState) => state.feed.items);
    const posts = useSelector((state: RootState) => state.post.posts);
    const { loadMoreFeedItems, toggleLikePost } = useFeedViewModel();

    const renderItem = ({ item }: { item: IFeedItem }) => (
        <FeedItem
            item={item}
            onLike={() => toggleLikePost(item.id)}
        />
    );

    const dataItems: (IFeedItem | Post)[] = [...posts, ...feed];

    return (
        <View style={{ flex: 1 }}>
            <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
            <Button title="Profile" onPress={() => navigation.navigate('Profile')} />

            <FlatList
                data={dataItems}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={10}
                removeClippedSubviews={true}
                onEndReached={loadMoreFeedItems}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default FeedScreen;