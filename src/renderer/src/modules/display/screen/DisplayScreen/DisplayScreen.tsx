import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { useThemeMode } from '@renderer/themes'
import { InformationCard, RunningText, VideoBanner } from './components'
import { styles } from './DisplayScreen.style'

export const DisplayScreen: FC = () => {
  const { themeMode } = useThemeMode()

  return (
    <VStack sx={styles.container}>
      {/* Content */}
      <VStack
        sx={{
          flex: 1,
          width: '100%',
          maxHeight: '95%',
          alignItems: 'stretch',
          justifyContent: 'space-between'
        }}
      >
        {/* Left */}
        <VStack sx={styles.left}>
          {/* Video Banner */}
          <VideoBanner embedId={'2Gub8-cSH9c'} />

          {/* Date & Time */}
          <HStack sx={styles.dateTimeRow}>
            {/* Date */}
            <InformationCard title={'Today Date:'} theme={themeMode} style={styles.card}>
              <Text
                fontWeight={'extrabold'}
                lineHeight={'none'}
                fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
              >
                {`15`} <br />
                {`January`} <br />
                {`2025`} <br />
              </Text>
            </InformationCard>

            {/* Time */}
            <InformationCard title={'Time:'} theme={themeMode} style={styles.card}>
              <Text
                fontWeight={'extrabold'}
                lineHeight={'none'}
                fontSize={{ base: '4xl', md: '6xl', lg: '9xl' }}
              >
                15:00
              </Text>
            </InformationCard>
          </HStack>
        </VStack>

        {/* Right */}
        <VStack sx={styles.right}></VStack>
      </VStack>

      {/* Running-text */}
      <VStack
        sx={{
          height: '5%',
          width: '100%'
        }}
      >
        <RunningText />
      </VStack>
    </VStack>
  )
}
