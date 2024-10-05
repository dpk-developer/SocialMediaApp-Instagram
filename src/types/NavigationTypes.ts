import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Feed: undefined;
    CreatePost: undefined;
    Profile: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;