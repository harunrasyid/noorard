import { SystemStyleObject } from '@chakra-ui/react'
import { containers } from '@renderer/styles'

const styles: { [key: string]: SystemStyleObject } = {
  screen: {
    flex: 1,
    width: '100vw',
    height: '100vh',
    padding: { base: containers.paddingMobile, lg: containers.paddingDesktop }
  }
}

export { styles }
