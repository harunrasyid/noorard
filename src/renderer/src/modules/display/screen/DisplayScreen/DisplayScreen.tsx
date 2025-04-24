import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { useThemeMode } from '@renderer/themes'
import { EScheduleCardVariant, InformationCard, RunningText, ScheduleCard, VideoBanner } from './components'
import { styles } from './DisplayScreen.style'

export const DisplayScreen: FC = () => {
  const { themeMode } = useThemeMode()

  return (
    <VStack sx={styles.container}>
      <HStack sx={styles.content}>
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
        <VStack sx={styles.right}>
          <ScheduleCard time={'04:30'} title={'Subuh'} variant={EScheduleCardVariant.Active} theme={themeMode} />
          <ScheduleCard time={'12:00'} title={'Dzuhur'} theme={themeMode} />
          <ScheduleCard time={'13:15'} title={'Ashar'} theme={themeMode} />
          <ScheduleCard time={'18:00'} title={'Maghrib'} theme={themeMode} />
          <ScheduleCard time={'19:00'} title={'Isya'} theme={themeMode} />
        </VStack>
      </HStack>

      {/* Running text */}
      <VStack sx={styles.runningText}>
        <RunningText />
      </VStack>
    </VStack>
  )
}
