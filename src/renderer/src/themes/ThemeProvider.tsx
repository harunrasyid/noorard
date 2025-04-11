import React, { createContext, useContext, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { afternoonTheme, morningTheme, nightTheme } from './'

interface IThemeModeContext {
  setThemeMode: (mode: string) => void
}

const ThemeModeContext = createContext<IThemeModeContext>({
  setThemeMode: () => {}
})

export const useThemeMode = (): IThemeModeContext => useContext(ThemeModeContext)

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<string>('morning')

  // Choose theme based on time
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setThemeMode('morning')
    else if (hour < 18) setThemeMode('afternoon')
    else setThemeMode('night')
  }, [])

  const theme = (time: string) => {
    switch (time) {
      case 'morning':
        return morningTheme
      case 'afternoon':
        return afternoonTheme
      default:
        return nightTheme
    }
  }

  return (
    <ThemeModeContext.Provider value={{ setThemeMode }}>
      <ChakraProvider theme={theme(themeMode)}>{children}</ChakraProvider>
    </ThemeModeContext.Provider>
  )
}
