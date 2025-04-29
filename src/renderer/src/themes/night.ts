import { extendTheme } from '@chakra-ui/react'
import { color } from '@renderer/styles'

export const nightTheme = extendTheme({
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
        opacity: 0.2,
        zIndex: -1
      },
      body: {
        bg: color.forestGreen['500'],
        color: color.forestGreen['500']
      }
    }
  },
  colors: {
    ...color,
    primary: color.goldenAmber
  },
  fonts: {
    heading: `'Adelle', sans-serif`,
    body: `'Adelle', sans-serif`
  }
})
