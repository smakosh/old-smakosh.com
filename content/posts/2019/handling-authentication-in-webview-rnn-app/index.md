---
id: 23
path: '/visa-rejections-and-life-update'
thumbnail: './webview-react-native.jpg'
date: 2019-09-19T07:50:01.889Z
edited: 2019-09-19T07:50:01.889Z
next: '/'
title: 'Handling authentication in-webview rnn app'
tags:
  - react
  - dev
  - tech
popular: false
draft: true
---

## Theory

Before you start reading and getting into this article, you must be aware that only the minority of mobile developers get into this use case and due to that, I decided to write this article to guide you through out on how to implement authentication within a native app that has a webview part.

You may be wondering why going through this while you could have just converted the web app into a fully native app or just go fully with the webview.

Well to answer the first question, sometimes the client wants a quick & cheap MVP to deploy to TestFlight or the Beta track on the Play Store for their customers to test and share feedback.

The reason we want to have at least the authentication part being fully native is because humans test your submitted app on the App Store unlike Google, and they reject the app if it uses the webview only.

Before we move into to the practical part in this guide, let me explain how we will deal with authentication first:

1. User has to register or sign in
2. A request is sent to our REST or GraphQL API returning a JWT token
3. Token gets stored within the device storage
4. User gets redirected to the webview screen being authenticated as we pass the token to the web app using a great library called `react-native-webview-invoke`, that lets us pass values and functions to be executed within the web app.
5. When the user signs out within the webview screen, a function will be invoked from the web app that logs out the user on the native app as well
   > This way, when the user opens up the app once again, they will start from the authentication process
6. We will be getting the stored token and verifying that it is still valid, if it is, the API will return user's data, else user has to login once again.

## Practice

So let us begin by initializing a new React Native project using `npx react-native init authApp`

Let us install all the libraries we will be using in this example:

- Navigation: react-native-navigation
  > If you're not familliar with this native library, you could check out [my friend's article](https://www.obytes.com/blog/2019/intro-to-react-native-navigation/) who published a friendly beginner guide on how to install and use this library.
- HTTP requests: axios
- Webview: react-native-webview
- Storage: @react-native-community/async-storage
- Forms & validation: formik + yup
- Styling: styled-components

## Configuring RNN

As I'm using React Native 0.60.5, it's way easier to configure react-native-navigation now, you can follow these steps to get it configured:

### for iOS

1. `cd ios`
2. open the `Podfile`
3. add this line below the `Folly` module

```ruby
pod 'ReactNativeNavigation', :podspec => '../node_modules/react-native-navigation/ReactNativeNavigation.podspec'
```

4. open your xcodeproj in Xcode
5. In Xcode, you will need to edit this file: `AppDelegate.m`
6. Its content should like below

```objective-c
 #import "AppDelegate.h"

 #import <React/RCTBundleURLProvider.h>
 #import <React/RCTRootView.h>
 #import <ReactNativeNavigation/ReactNativeNavigation.h>

 @implementation AppDelegate

 - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
 {
     NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
     [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];

     return YES;
 }

 @end
```

7. Open `AppDelegate.h` and make sure its content looks like below

```objective-c
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
```

### for Android

You might want to check [the official guide](https://wix.github.io/react-native-navigation/#/docs/Installing?id=android)

## Registering our screens

Let's start by opening up our `index.js` file and removing its content, then we will import `Navigation`, along with our registered screens under `src/config/index.js` and initialize our app using the `registerAppLaunchedListener` callback.

> `index.js`

```jsx
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/config'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing',
      },
    },
  })
})
```

> `src/config/index.js`

```jsx
import { Navigation } from 'react-native-navigation'
import Initializing from 'src/screens/Initializing'
import Home from 'src/screens/Home'
import Login from 'src/screens/Login'
import Register from 'src/screens/Register'

export const API_URL = 'localhost:5000/api/'

export const registerScreens = () => {
  Navigation.registerComponent('Initializing', () => Initializing)
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Login', () => Login)
  Navigation.registerComponent('Register', () => Register)
}
```

Now let's move on creating our screens

> `src/screens/Initializing.js`

This screen is the one that will appear to users while fetching and validating their tokens

> Notice that I'm using a custom hook `useGetUser` that contains all that logic.

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import Container from 'components/Container'
import CustomButton from 'components/CustomButton'
import useGetUser from 'hooks/useGetUser'
import { goToAuth, goHome, goToRegister } from 'config/navigation'

export default () => {
  const [loading, user] = useGetUser()

  return (
    <Container>
      {loading ? (
        <Text>Loading</Text>
      ) : user && user.isLoggedIn ? (
        <View>
          <Text>Welcome back {user.username}!</Text>
          <CustomButton goHome={() => goHome()}>Go Home</CustomButton>
        </View>
      ) : (
        <View>
          <Text>Welcome!</Text>
          <CustomButton onPress={() => goToRegister()}>Register</CustomButton>
          <CustomButton onPress={() => goToAuth()}>Sign In</CustomButton>
        </View>
      )}
    </Container>
  )
}
```

Next, let's prepare both the `SignIn` and `Register` screens:

```jsx
```
