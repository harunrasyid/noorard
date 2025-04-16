import { Text, VStack } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import { styles } from "./RunningText.style"

export const RunningText = () => {
  return (
    <VStack
      sx={styles.container}
    >
      <Marquee
        style={{
          alignItems: 'center'
        }}
      >
        <Text>Text 1</Text>
      </Marquee>
    </VStack>
  )
}
