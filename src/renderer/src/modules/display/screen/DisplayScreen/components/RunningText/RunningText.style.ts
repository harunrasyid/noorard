import { SystemStyleObject } from '@chakra-ui/react'
import { color, radius, spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: radius.sm,
    padding: `0px ${spacingScale.lG} 0px ${spacingScale.lG}`
  },

  itemContainer: {
    gap: { base: spacingScale.lG, md: spacingScale.xL, lg: spacingScale['2xL'] }
  },

  morningBackground: {
    backgroundColor: color.softBeige['200']
  },
  afternoonBackground: {
    backgroundColor: color.forestGreen['500']
  },
  nightBackground: {
    backgroundColor: color.softBeige['200']
  }
}

export { styles }
