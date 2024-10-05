import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from './screens/FeedScreen';
import Profile from './screens/ProfileScreen';
import CreatePost from './screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Feed">
                    <Stack.Screen name="Feed" component={Feed} />
                    <Stack.Screen name="CreatePost" component={CreatePost} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;