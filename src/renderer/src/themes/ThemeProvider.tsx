import React, { createContext, useContext, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { EThemeMode } from '@renderer/constants'
import { afternoonTheme, morningTheme, nightTheme } from './'

interface IThemeModeContext {
  themeMode: EThemeMode
  setThemeMode: (mode: EThemeMode) => void
}

const ThemeModeContext = createContext<IThemeModeContext>({
  themeMode: EThemeMode.Morning,
  setThemeMode: () => {}
})

export const useThemeMode = (): IThemeModeContext => useContext(ThemeModeContext)

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.Morning)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setThemeMode(EThemeMode.Morning)
    else if (hour < 18) setThemeMode(EThemeMode.Afternoon)
    else setThemeMode(EThemeMode.Night)
  }, [])

  const theme = (time: string) => {
    switch (time) {
      case EThemeMode.Morning:
        return morningTheme
      case EThemeMode.Afternoon:
        return afternoonTheme
      default:
        return nightTheme
    }
  }

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ChakraProvider theme={theme(themeMode)}>{children}</ChakraProvider>
    </ThemeModeContext.Provider>
  )
}
