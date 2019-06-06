import { useState, useEffect } from 'react'
import { withPrefix } from 'gatsby'

export default () => {
  const [isHomePage, setHomePage] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    if (location.pathname === withPrefix('/')) setHomePage(true)
  }, [])

  const toggle = () => setSidebar(!sidebar)

  return [isHomePage, sidebar, toggle]
}
