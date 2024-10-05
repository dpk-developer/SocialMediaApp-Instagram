This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Social Media App

A simple social media application built with React Native, TypeScript, and Redux Toolkit. This app allows users to create posts with images or videos, view a feed of posts, and manage their profiles.

## Features

- **User Authentication**: Signup and login functionality with form validation.
- **Create Posts**: Users can create posts with titles, descriptions, and media (images/videos).
- **Feed**: Display a feed of posts with infinite scrolling.
- **Profile Management**: Users can view and manage their profiles.
- **Unit Testing**: Test coverage using Jest with at least 70% coverage.

## Technologies Used

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- Jest (for testing)
- React Native Image Picker (for media selection)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Yarn (or npm)
- React Native CLI
- Android Studio or Xcode (for mobile emulators)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dpk-developer/SocialMediaApp-Instagram.git
   cd social-media-app

To run tests with coverage, use:
 - yarn test --coverage


# Directory Structure

/src
├── /components         # Reusable components
├── /screens            # Screen components
├── /store              # Redux store and slices
├── /models             # TypeScript models
├── /mockData           # Sample data for development
├── /types              # Type definitions
└── /viewmodels         # ViewModel patterns for separating logic

# Acknowledgments
Inspired by various social media applications.
Thanks to the React Native community for their resources and documentation.


### Tips for Customization

1. **Project Links**: Update the GitHub repository link with your actual project URL.
2. **Dependencies**: Add or modify the list of technologies and libraries used in your project if there are others not mentioned.
3. **Running Instructions**: Adjust the running instructions based on any specific configurations or setup steps you might have.
4. **License**: If you are using a different license, make sure to update that section accordingly.

Once you've made the necessary modifications, save this content to a file named `README.md` in the root directory of your project.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

