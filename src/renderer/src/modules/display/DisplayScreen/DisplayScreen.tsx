import { FC } from 'react'
import { Button, Text, VStack } from '@chakra-ui/react'

export const DisplayScreen: FC = () => {
  return (
    <VStack>
      <Text>This is display screen</Text>
      <Button colorScheme="primary">This is button</Button>
    </VStack>
  )
}
