import { SystemStyleObject } from '@chakra-ui/react'
import { color, radius, spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  card: {
    alignItems: 'flex-start',
    padding: spacingScale.xL,
    borderRadius: radius.lg,
    gap: spacingScale.mD
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
