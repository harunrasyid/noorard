import { Box } from '@chakra-ui/react'
import { IScreenProps } from './Screen.props'
import { styles } from './Screen.style'

export const Screen = ({ children }: IScreenProps) => {
  return <Box sx={styles.screen}>{children}</Box>
}
