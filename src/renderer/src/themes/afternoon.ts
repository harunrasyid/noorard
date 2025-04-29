import { extendTheme } from '@chakra-ui/react'
import { color } from '@renderer/styles'

export const afternoonTheme = extendTheme({
  styles: {
    global: {
      'body::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('src/assets/pngs/grain.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: -1
      },
      body: {
        bg: color.softBeige['500'],
        color: color.softBeige[200]
      }
    }
  },
  colors: {
    ...color,
    primary: color.forestGreen
  },
  fonts: {
    heading: `'Adelle', sans-serif`,
    body: `'Adelle', sans-serif`
  }
})
