---
id: 15
path: '/how-to-add-dark-mode-easily-with-a-custom-react-hook'
thumbnail: './custom-hook.png'
date: 2019-03-22T5:35:01.889Z
edited: 2019-06-13T1:59:01.889Z
next: '/pixel-2-review-and-why-Nexus-6p-is-a-bad-choice'
title: 'How To add dark mode easily with a custom React hook'
tags:
  - react
  - dev
popular: true
---

In this quick article, I will be implementing dark mode to a quick React app with a custom React hook,

Before we start, let's see how is this supposed to work in three easy steps:

1. We will check first if the chosen theme isn't stored on localStorage
2. If it exists, we will simply set it as the default theme
3. Otherwise, we will have to use the light theme as the default one

So let's get started!

Let's start by setting up the custom hook first, we will be using `useEffect` & `useState` imported from React, we will check localStorage when the component mounts for the first time, then we'll follow the second step!

```jsx
import { useEffect, useState } from 'react'

export default () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('components/theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])
}
```

Let's setup a function now that toggles in between themes and stores the selected theme in localStorage

```jsx
import { useEffect, useState } from 'react'

export default () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('components/theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])
}
```

All good now, we only need to return the theme value along with the function so we can access it when we import the custom hook!

```jsx
import { useEffect, useState } from 'react'

export default () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('components/theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
```

Finally, let's see how we can use it when we import it

```jsx
import React from 'react'
import useDarkMode from './useDarkMode'

export default () => {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <div
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
    </div>
  )
}
```

You can find the full example [here](https://codesandbox.io/s/mjm4zy7pm8)
