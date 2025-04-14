import { VStack } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import { color } from '@renderer/styles'

export const RunningText = () => {
  return (
    <VStack
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: color.softBeige['200']
      }}
    >
      <Marquee
        style={{
          alignItems: 'center'
        }}
      >
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    </VStack>
  )
}
