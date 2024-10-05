import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import { useProfileViewModel } from '../viewmodels/ProfileViewModel';

const ProfileScreen = () => {
    const { noOfPost } = useProfileViewModel();
    return (
        <View style={styles.container}>
            <ProfileHeader />
            {
                noOfPost.length ? (
                    <FlatList
                        data={noOfPost}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item.mediaUri }} style={styles.postImage} />
                        )}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text style={styles.notFound}>No Post Found</Text>
                )
            }
        </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    postImage: {
        width: '30%',
        height: 100,
        margin: 6,
    },
    notFound: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        top: Dimensions.get('screen').height / 2,
        position: 'absolute',
    },
});


export default ProfileScreen;