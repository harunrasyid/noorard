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
