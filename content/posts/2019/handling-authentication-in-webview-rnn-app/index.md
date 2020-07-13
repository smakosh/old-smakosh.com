---
id: 23
path: '/webview-native-authentication'
thumbnail: './webview-react-native.jpg'
date: 2019-12-01T07:50:01.889Z
edited: 2019-12-01T07:50:01.889Z
next: '/visa-rejections-stories'
title: 'Webview native authentication in React Native'
tags:
  - react
  - dev
  - tech
popular: true
draft: false
---

TL;DR:

- React Native App: https://github.com/smakosh/article-auth-app
- React web app: https://github.com/smakosh/article-auth-web
- REST API: https://github.com/smakosh/article-auth-api

## Theory

Before you start reading and getting into this article, you must be aware that only the minority of mobile developers get into this use case and due to that, I decided to write this article to guide you through on how to implement authentication within a native app that has a webview part included.

You may be wondering why going through this while you could have just converted the web app into a fully native app or just go fully with the webview.

Well to answer the first question, sometimes your client wants a quick & cheap MVP to deploy to TestFlight or the Beta track on the Play Store for their customers to test and share feedback.

The reason we want to have at least the authentication part being fully native is because your submitted app on the App Store unlike Google gets tested by humans, and they reject the app if it uses the webview only.

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

> ⚠️ I'll be using React Native `0.61.5`

Let us install all the libraries we will be using in this example:

- Navigation: react-native-navigation
- HTTP requests: axios
- Webview: react-native-webview
- Storage: @react-native-community/async-storage
- Forms & validation: formik + yup
- Styling: styled-components

## Configuring RNN

As I'm using React Native 0.61.5, it's way easier to configure react-native-navigation now, you can follow these steps to get it configured:

### for iOS

1. `cd ios`
2. open the `Podfile`
3. add this line to your Podfile

```ruby
pod 'ReactNativeNavigation', :podspec => '../node_modules/react-native-navigation/ReactNativeNavigation.podspec'
```

4. open your xcworkspace project in Xcode
5. In Xcode, you will need to edit this file: `AppDelegate.m`
6. Its content should look like this

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

> ⚠️ Make sure to create `react-native.config.js` file on the root of your app and put this content:

```js
module.exports = {
  dependencies: {
    '@react-native-community/async-storage': {
      platforms: {
        android: null,
      },
    },
    'react-native-webview': {
      platforms: {
        android: null,
      },
    },
  },
}
```

We basically want to avoid auto linking those two libraries on Android.

## Registering our screens

Let's start by opening up our `index.js` file and removing its content, then we will import `Navigation` from react-native-navigation, along with our registered screens under `src/config/index.js` and initialize our app using the `registerAppLaunchedListener` callback.

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

We set `Initializing` as the first screen to render.

Let's now register the rest of the screens

We have:

- **Initializing** screen, which has been explained above ☝️
- **Home** screen which will contain the webview of our web app
- **Login/Register** screens are self descriptive

> `src/config/index.js`

```jsx
import { Navigation } from 'react-native-navigation'
import Initializing from 'src/screens/Initializing'
import Home from 'src/screens/Home'
import Login from 'src/screens/Login'
import Register from 'src/screens/Register'

export const BASE_URL = 'http://localhost:5000/api'
export const REACT_APP = 'http://localhost:3000'

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Initializing', () => Initializing)
  Navigation.registerComponent('Login', () => Login)
  Navigation.registerComponent('Register', () => Register)
}
```

> `BASE_URL` is our REST API and `REACT_APP` is our React web app.

Now let's move on creating our screens

> `src/screens/Initializing.js`

This screen is the one that will appear to users first while fetching and validating their tokens

```jsx
import React from 'react'
import Layout from 'src/components/Layout'
import Initializiation from 'src/modules/Initializiation'

export default () => (
  <Layout>
    <Initializiation />
  </Layout>
)
```

Initialization is where the logic exists which lives under `src/modules/Initializing`

```jsx
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Context } from 'src/providers/UserProvider'
import useGetUser from 'src/hooks/useGetUser'
import Container from 'src/components/Container'
import CustomButton from 'src/components/CustomButton'

export default () => {
  const { user, dispatch } = useContext(Context)
  const { loading, isLoggedIn } = useGetUser(user, dispatch)

  return (
    <Container>
      {loading ? (
        <Text>Loading</Text>
      ) : isLoggedIn ? (
        <View>
          <Text>Welcome back {user.data.user.username}!</Text>
          <CustomButton goHome={() => goHome(user.data.token)}>
            Go Home
          </CustomButton>
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

> Notice that I'm using a custom hook `useGetUser` that contains all that logic and I'm passing the `user` object and `dispatch` function from the User Context.

Layout is a wrapper component that wrapps the passed children with the User Provider as shown below

> You can add the header and more components that are meant to appear on all your screens

Layout lives under `src/components/Layout`

```jsx
import React from 'react'
import UserProvider from 'src/providers/UserProvider'

export default ({ children }) => <UserProvider>{children}</UserProvider>
```

And I'm using React Context API to manage my global state, here's the User Provider component and reducer

It lives under `src/providers/UserProvider`

```jsx
import React, { useReducer, createContext } from 'react'
import UserReducer from 'src/reducers/UserReducer'

export const Context = createContext()

export default ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, [])

  return (
    <Context.Provider
      value={{
        user,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
```

the user reducer lives under `src/reducer/UserReducer`

```jsx
export default (user, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...user,
        isLoggedIn: true,
        data: action.payload,
      }
    case 'LOGOUT':
      return {
        ...user,
        isLoggedIn: false,
        data: {},
      }
    default:
      return user
  }
}
```

And here's the `useGetUser` hook which lives under `src/hooks/`

```js
import { useState, useEffect, useCallback } from 'react'
import { verifyToken } from 'src/modules/auth/actions'

export default (user, dispatch) => {
  const [loading, setLoading] = useState(true)
  const [error, _setError] = useState(null)

  const fetchUser = useCallback(() => verifyToken(dispatch, setLoading), [
    dispatch,
  ])

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUser()
    }
  }, [user.isLoggedIn, fetchUser])

  return {
    error,
    loading,
    isLoggedIn: user.isLoggedIn,
  }
}
```

I'm importing `verifyToken` from the auth actions, the action simply verifies that the token hasn't expired yet, [see Step 6 above on the Theory section](/webview-native-authentication#theory)

> It lives under `src/modules/auth/actions.js`

```js
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from 'src/helpers/setAuthToken'
import { BASE_URL } from 'src/config'

export const verifyToken = async (dispatch, setLoading) => {
  try {
    const token = await AsyncStorage.getItem('token')

    if (token) {
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/user/verify`,
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
      })

      setAuthToken(data.token)
      await dispatch({ type: 'SAVE_USER', payload: data })
      AsyncStorage.setItem('token', data.token)
    }
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}
```

More actions will be added as we move on through this guide through.

Next, let's prepare both the `SignIn` and `Register` screens:

Login lives under `src/screens/Login`

```jsx
import React from 'react'
import Login from 'src/modules/auth/Login'
import Layout from 'src/components/Layout'

export default () => (
  <Layout>
    <Login />
  </Layout>
)
```

And Login module lives under `src/modules/auth/Login`

```jsx
import React, { useContext } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Context } from 'src/providers/UserProvider'
import { login } from 'src/modules/auth/actions'
import Container from 'src/components/Container'
import InputField from 'src/components/InputField'
import ErrorField from 'src/components/ErrorField'
import CustomButton from 'src/components/CustomButton'
import DismissibleKeyboardView from 'src/components/DismissibleKeyboardView'
import { Label } from '../styles'

export default () => {
  const { dispatch } = useContext(Context)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          login({ dispatch, setErrors, setSubmitting, values })
        } catch (err) {
          setSubmitting(false)
        }
      }}
    >
      {({
        isSubmitting,
        handleSubmit,
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
      }) => (
        <Container>
          <DismissibleKeyboardView keyboardShouldPersistTaps="handled">
            <View>
              <Label>Email</Label>
              <InputField
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                selectTextOnFocus
              />
              {touched.email && errors.email && (
                <ErrorField>{errors.email}</ErrorField>
              )}
            </View>
            <View>
              <Label>Password</Label>
              <InputField
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                selectTextOnFocus
                secureTextEntry
              />
              {touched.password && errors.password && (
                <ErrorField>{errors.password}</ErrorField>
              )}
            </View>
            <CustomButton onPress={handleSubmit} disabled={isSubmitting}>
              Login
            </CustomButton>
          </DismissibleKeyboardView>
        </Container>
      )}
    </Formik>
  )
}
```

I'm using the newest version of Formik with yup for validation, there is one action called `login` being dispatched there when the form is submitted.

login action lives under `src/modules/auth/actions`, the same file where `verifyToken` lives

```js
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from 'src/helpers/setAuthToken'
import { BASE_URL } from 'src/config'
import { goHome } from 'src/config/navigation'

export const login = async ({ dispatch, setErrors, setSubmitting, values }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/user/login`, values)
    setAuthToken(data.token)
    await dispatch({ type: 'SAVE_USER', payload: data })
    await AsyncStorage.setItem('token', data.token)
    setSubmitting(false)
    goHome(data.token)
  } catch (err) {
    setSubmitting(false)
    setErrors({ email: err.response.data.error })
  }
}

export const verifyToken = async (dispatch, setLoading) => {
  try {
    const token = await AsyncStorage.getItem('token')

    if (token) {
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}/user/verify`,
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
      })

      setAuthToken(data.token)
      await dispatch({ type: 'SAVE_USER', payload: data })
      AsyncStorage.setItem('token', data.token)
    }
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}
```

We will add three more actions later on as we move on.

The `setAuthToken` function simply adds a `x-auth` header to all upcoming requests

It lives under `src/helpers/setAuthToken`

```js
import axios from 'axios'

export default token => {
  if (token) {
    axios.defaults.headers.common['x-auth'] = token
  } else {
    delete axios.defaults.headers.common['x-auth']
  }
}
```

Register is following the same logic, you'll be able to find the source code on the repositories as everything will be open sourced, so let's move on to the important screen which is the **Home** screen

It lives under `src/screens/Home`

```jsx
import React from 'react'
import Home from 'src/modules/dashboard/Home'
import Layout from 'src/components/Layout'

export default ({ token }) => (
  <Layout>
    <Home token={token} />
  </Layout>
)
```

the actual logic exists within `src/module/dashboard/Home`

let's start by creating an invoke from the native side and add the webview of our React app

```jsx
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import createInvoke from 'react-native-webview-invoke/native'
import { REACT_APP } from 'src/config/'

class Home extends Component {
  webview

  invoke = createInvoke(() => this.webview)

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <WebView
          useWebKit
          ref={webview => (this.webview = webview)}
          onMessage={this.invoke.listener}
          source={{
            uri: `${REACT_APP}`,
          }}
          bounces={false}
        />
      </SafeAreaView>
    )
  }
}

Home.options = {
  topBar: {
    title: {
      text: 'Home',
    },
    visible: false,
  },
}

export default Home
```

We want to pass one function and value from React Native to the React web app:

1. Passing the token as url param, not sure if it's a good approach to follow, feel free to enlighten me if you know any better approach to achieve this.
2. A function that will log the user out from the React Native app, remove the token from the device storage and redirect them back to the `Login` screen, triggered/invoked from the React web app.

So let's add that to the **Home** module

```jsx
import React, { Component } from 'react'
import { SafeAreaView, Alert } from 'react-native'
import { WebView } from 'react-native-webview'
import AsyncStorage from '@react-native-community/async-storage'
import createInvoke from 'react-native-webview-invoke/native'
import { goToAuth } from 'src/config/navigation'
import { REACT_APP } from 'src/config/'

class Home extends Component {
  webview

  invoke = createInvoke(() => this.webview)

  componentDidMount() {
    this.invoke.define('onLogout', this.onLogout)
  }

  onLogout = async () => {
    try {
      AsyncStorage.clear()
      goToAuth()
    } catch (err) {
      Alert.alert('Something went wrong')
    }
  }

  render() {
    const { token } = this.props
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <WebView
          useWebKit
          ref={webview => (this.webview = webview)}
          onMessage={this.invoke.listener}
          source={{
            uri: `${REACT_APP}/?token=${token}`,
          }}
          bounces={false}
        />
      </SafeAreaView>
    )
  }
}

export default Home
```

Let's now see how can we handle that from the React web app.

> I'll skip right into the part where we handle the passed function to invoke it, the source code will be able available for you.

First of all, let's import `invoke` from `react-native-webview-invoke/browser`

```js
import invoke from 'react-native-webview-invoke/browser'
```

All we have to do to access the function and invoke it is binding, checking if it exists and invoking it.

```js
const onLogout = invoke.bind('onLogout')
if (onLogout) {
  onLogout().then(() => {})
}
```

That's basically the guide through to implement authentication within a native app that has a webview section.

If you managed to make it until the end, make sure to subscribe to the news letter down below in order to get the latest articles delivered right to your inbox!

- React Native App: https://github.com/smakosh/article-auth-app
- React web app: https://github.com/smakosh/article-auth-web
- REST API: https://github.com/smakosh/article-auth-api
