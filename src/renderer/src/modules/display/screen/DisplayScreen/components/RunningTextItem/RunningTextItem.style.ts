import { SystemStyleObject } from '@chakra-ui/react'
import { color, spacingScale } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  text: {
    fontSize: { base: 'sm', lg: 'md' },
    fontWeight: 'bold'
  },

  box: {
    height: '10px',
    aspectRatio: '1 / 1',
    transform: 'rotate(45deg)',
    gap: { base: spacingScale.sM, md: spacingScale.mD, lg: spacingScale.xL }
  },
  boxMorning: {
    backgroundColor: color.goldenAmber[500]
  },
  boxAfternoon: {
    backgroundColor: color.goldenAmber[500]
  },
  boxNight: {
    backgroundColor: color.goldenAmber[500]
  }
}

export { styles }
