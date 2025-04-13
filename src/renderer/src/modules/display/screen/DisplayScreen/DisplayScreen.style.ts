import { SystemStyleObject } from '@chakra-ui/react'
import { spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'rew'
  },

  left: { flex: 1, maxWidth: '60%', gap: spacingScale['3xL'] },

  right: { flex: 1, maxWidth: '40%' }
}

export { styles }
