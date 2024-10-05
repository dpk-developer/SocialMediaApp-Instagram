import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useProfileViewModel } from '../viewmodels/ProfileViewModel';

const ProfileHeader = () => {
    const { userProfile, noOfPost } = useProfileViewModel();

    return (
        <View style={styles.container}>
            <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{userProfile.username}</Text>
            <Text style={styles.bio}>{userProfile.bio}</Text>
            <Text style={styles.followers}>Followers: {userProfile.followers}</Text>
            <Text style={styles.posts}>Posts: {noOfPost.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    bio: {
        fontSize: 16,
        color: 'black',
        marginVertical: 5,
    },
    followers: {
        fontSize: 16,
        marginVertical: 5,
        color: 'black',
    },
    posts: {
        fontSize: 16,
        marginVertical: 5,
        color: 'black',
    },
});

export default ProfileHeader;