import { HStack, VStack } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import { RunningTextItem } from '../RunningTextItem'
import { styles } from './RunningText.style'

export const RunningText = () => {
  return (
    <VStack sx={styles.container}>
      <Marquee style={{ height: '100%' }}>
        <HStack sx={styles.itemsContainer}>
          <RunningTextItem text="This is running text 1" />
          <RunningTextItem text="This is running text 2" />
          <RunningTextItem text="This is running text 3" />
          <RunningTextItem text="This is running text 4" />
        </HStack>
      </Marquee>
    </VStack>
  )
}
