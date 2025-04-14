import { SystemStyleObject } from '@chakra-ui/react'
import { spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
    gap: { base: spacingScale.sM, md: spacingScale.lG, lg: spacingScale['3xL'] }
  },

  left: {
    flex: 1,
    maxWidth: '60%',
    minHeight: '100%',
    gap: { base: spacingScale.sM, md: spacingScale.lG, lg: spacingScale['3xL'] }
  },
  dateTimeRow: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    gap: { base: spacingScale.sM, md: spacingScale.lG, lg: spacingScale['3xL'] }
  },
  card: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  right: { flex: 1, maxWidth: '40%', minHeight: '100%' }
}

export { styles }
