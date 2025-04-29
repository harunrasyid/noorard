import { SystemStyleObject } from '@chakra-ui/react'
import { spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    flex: 1,
    width: '100%',
    maxHeight: '40%',
    overflow: 'hidden',
    gap: { base: spacingScale.sM, md: spacingScale.lG, lg: spacingScale['3xL'] }
  },

  card: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
}

export { styles }
