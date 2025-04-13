import { SystemStyleObject } from '@chakra-ui/react'
import { radius } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  videoContainer: {
    width: '100%',
    position: 'relative',
    aspectRatio: '16 / 9',
    borderRadius: radius.lg,
    overflow: 'hidden'
  }
}

export { styles }
