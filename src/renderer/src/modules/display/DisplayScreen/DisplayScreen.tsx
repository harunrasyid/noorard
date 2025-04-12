import { FC } from 'react'
import { Stack, VStack } from '@chakra-ui/react'
import { styles } from './DisplayScreen.style'

export const DisplayScreen: FC = () => {
  return (
    <Stack sx={styles.container}>
      {/* Left */}
      <VStack sx={styles.left}>
        {/* Video Banner */}
        <VStack
          sx={{
            width: '100%',
            position: 'relative',
            aspectRatio: '16 / 9'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Bp2C4XBJnLo?autoplay=1&controls=0&mute=1&modestbranding=1&rel=0&showinfo=0"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </VStack>

        {/* Date & Time */}
        <VStack sx={{ flex: 1, width: '100%' }}></VStack>
      </VStack>

      {/* Right */}
      <VStack sx={styles.right}></VStack>
    </Stack>
  )
}
