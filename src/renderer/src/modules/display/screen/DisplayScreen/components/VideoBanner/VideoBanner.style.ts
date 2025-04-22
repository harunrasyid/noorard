import { SystemStyleObject } from '@chakra-ui/react'
import { radius } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  videoContainer: {
    flex: 1,
    width: '100%',
    maxHeight: '60%',
    backgroundColor: 'red',
    borderRadius: radius.lg,
    overflow: 'hidden'
  }
}

export { styles }
