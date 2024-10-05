import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { usePostViewModel } from '../viewmodels/PostViewModel';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, Asset, ImageLibraryOptions } from 'react-native-image-picker';
import { RootStackNavigation } from '../types/NavigationTypes';
import { Post } from '../models/Post';

const PostForm = () => {
    const navigation = useNavigation<RootStackNavigation>();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [mediaUri, setMediaUri] = useState<string>('');
    const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
    const { submitPost } = usePostViewModel();

    const handleMediaSelection = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'mixed',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets) {
                const asset: Asset = response.assets[0];
                setMediaUri(asset.uri || '');
                setMediaType(asset.type?.startsWith('video') ? 'video' : 'image');
            }
        });
    };

    const handleSubmit = () => {
        if (title && description && mediaUri) {
            const newPost: Post = { title, description, mediaUri, mediaType };
            
            submitPost(newPost);
            navigation.navigate('Feed');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Title"
                value={title}
                placeholderTextColor={'black'}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="Description"
                value={description}
                placeholderTextColor={'black'}
                onChangeText={setDescription}
            />
            <Button
                title="Select Image/Video"
                onPress={handleMediaSelection}
            />
            {mediaUri ? (
                mediaType === 'image' ? (
                    <Image
                        source={{ uri: mediaUri }}
                        style={{ width: 100, height: 100 }}
                    />
                ) : (
                    <Text>Video Selected: {mediaUri}</Text>
                )
            ) : null}
            <Button
                title="Post"
                onPress={handleSubmit}
            />
        </View>
    );
};

export default PostForm;