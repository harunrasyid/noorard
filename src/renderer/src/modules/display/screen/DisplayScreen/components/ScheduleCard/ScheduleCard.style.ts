import { SystemStyleObject } from '@chakra-ui/react'
import { color, radius, spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  card: {
    flex: 1,
    width: '100%',
    borderRadius: radius.lg,
    padding: spacingScale.xL,
    justifyContent: 'space-between'
  },

  left: {
    alignItems: 'flex-start',
    gap: 0
  },
  titleText: {
    fontWeight: 'extrabold',
    fontSize: { base: 'lg', md: '2xl', lg: '4xl' }
  },
  activeText: {
    fontWeight: 'bold',
    fontSize: { base: 'md', md: 'lg', lg: 'xl' }
  },

  timeText: {
    fontWeight: 'extrabold',
    fontSize: { base: '2xl', md: '4xl', lg: '6xl' }
  },

  morningActiveText: {
    color: color.softBeige['200']
  },
  afternoonActiveText: {
    color: color.forestGreen['500']
  },
  nightActiveText: {
    color: color.forestGreen['500']
  },

  morningText: {
    color: color.forestGreen['500']
  },
  afternoonText: {
    color: color.softBeige['200']
  },
  nightText: {
    color: color.forestGreen['500']
  },

  morningBackground: {
    backgroundColor: color.softBeige['200']
  },
  morningActiveBackground: {
    backgroundColor: color.forestGreen['500']
  },
  afternoonBackground: {
    backgroundColor: color.forestGreen['500']
  },

  afternoonActiveBackground: {
    backgroundColor: color.goldenAmber['500']
  },
  nightBackground: {
    backgroundColor: color.softBeige['200']
  },
  nightActiveBackground: {
    backgroundColor: color.goldenAmber['500']
  }
}

export { styles }
