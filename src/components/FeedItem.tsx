import React, { memo, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import { FeedItem as FeedItemModel } from '../models/Feed';

interface Props {
    item: FeedItemModel;
    onLike: () => void;
}

const FeedItem: React.FC<Props> = memo(({ item, onLike }) => {
    const [isPaused, setPaused] = useState<boolean>(true);
    
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{item.username}</Text>
            {item.mediaType === 'image' ? (
                <FastImage
                    style={styles.media}
                    source={{
                        uri: item.mediaUri,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    onError={() => {
                        console.log('Image failed to load:', item.mediaUri);
                    }}
                />
            ) : (
                <Video
                    source={{ uri: item.mediaUri }}
                    style={styles.media}
                    controls={true}
                    resizeMode="cover"
                    paused
                    onEnd={() => setPaused(!isPaused)}
                    onError={() => {
                        console.log('Video failed to load:', item.mediaUri);
                    }}
                    onLoadStart={() => <ActivityIndicator size="large" color="#0000ff" />}
                />
            )}
            <Text style={styles.description}>{item.description}</Text>
            <Button title={item.liked ? 'Unlike' : 'Like'} onPress={onLike} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    media: {
        width: '100%',
        height: 300,
        marginBottom: 5,
    },
    description: {
        color: 'black',
        marginBottom: 10,
    },
});

export default FeedItem;