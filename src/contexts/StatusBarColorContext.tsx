import React, { type ReactNode, createContext, useState } from 'react'
import { type ColorValue } from 'react-native'

export const StatusBarColorContext = createContext({})

export interface StatusBarColorContextProviderProps {
  children: ReactNode
}

export function StatusBarColorContextProvider ({ children }: StatusBarColorContextProviderProps) {
  const [backgroundColor, setBackgroundColor] = useState<ColorValue>('')
  return (
        <StatusBarColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            {children}
        </StatusBarColorContext.Provider>
  )
}
