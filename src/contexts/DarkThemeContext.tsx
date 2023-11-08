import React, { createContext, type ReactNode, useEffect, useState, useColorScheme } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type DarkThemeContextType = {
  darkTheme: boolean
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DarkThemeContextProviderProps {
  children: ReactNode
}

export const DarkThemeContext = createContext({} as DarkThemeContextType)

export function DarkThemeContextProvider ({ children }: DarkThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('darkTheme')
      if (value !== null) {
      }
    } catch (e) {
    }
  }

  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem('darkTheme', value.toString())
    } catch (e) {

    }
  }

  useEffect(() => {
    getData().then((value) => {
      if (value === 'true') {
        setDarkTheme(false)
      }
      setDarkTheme(false)
    })
  }, [])

  useEffect(() => { storeData(darkTheme) }, [darkTheme])

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  )
}
