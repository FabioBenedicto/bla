import { useContext } from 'react'

import { StatusBarColorContext } from '../contexts/StatusBarColorContext'

export default function useStatusBarColor () {
  return useContext(StatusBarColorContext)
}
