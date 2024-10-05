import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import FeedScreen from '../screens/FeedScreen';

test('renders FeedScreen correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <FeedScreen />
    </Provider>
  );
  expect(getByText('Feed')).toBeTruthy();
});