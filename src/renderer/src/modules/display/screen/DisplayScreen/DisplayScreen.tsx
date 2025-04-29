import { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { useThemeMode } from '@renderer/themes'
import {
  EScheduleCardVariant,
  InformationSection,
  RunningText,
  ScheduleCard,
  VideoBanner
} from './components'
import { styles } from './DisplayScreen.style'
import { color } from '@renderer/styles'

export const DisplayScreen: FC = () => {
  const { themeMode } = useThemeMode()

  return (
    <VStack sx={styles.container}>
      <HStack sx={styles.content}>
        {/* Left */}
        <VStack sx={styles.left}>
          {/* Video Banner */}
          <VideoBanner embedId={'2Gub8-cSH9c'} />

          {/* Information Section */}
          <InformationSection theme={themeMode} />
        </VStack>

        {/* Right */}
        <VStack sx={styles.right}>
          {/* Date & Time */}
          <HStack
            sx={{
              flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 0
            }}
          >
            {/* Date */}
            <VStack
              sx={{
                flex: 1,
                width: '100%',
                alignItems: 'flex-start',
                gap: 0
              }}
            >
              <Text
                sx={{
                  fontWeight: 'bold',
                  fontSize: { base: 'md', md: 'lg', lg: 'xl' },
                  color: color.softBeige['200']
                }}
              >
                Senin,
              </Text>
              <Text
                sx={{
                  fontWeight: 'bold',
                  fontSize: { base: 'lg', md: '2xl', lg: '4xl' },
                  color: color.softBeige['200']
                }}
              >
                12 Januari 2025
              </Text>
            </VStack>

            {/* Time */}
            <Text
              sx={{
                fontWeight: 'extrabold',
                fontSize: { base: '2xl', md: '4xl', lg: '6xl' },
                color: color.softBeige['200']
              }}
            >{`15:00`}</Text>
          </HStack>

          {/* Schedule Cards */}
          <ScheduleCard
            time={'04:30'}
            title={'Subuh'}
            variant={EScheduleCardVariant.Active}
            theme={themeMode}
          />
          <ScheduleCard time={'12:00'} title={'Dzuhur'} theme={themeMode} />
          <ScheduleCard time={'13:15'} title={'Ashar'} theme={themeMode} />
          <ScheduleCard time={'18:00'} title={'Maghrib'} theme={themeMode} />
          <ScheduleCard time={'19:00'} title={'Isya'} theme={themeMode} />
        </VStack>
      </HStack>

      {/* Running text */}
      <VStack sx={styles.runningText}>
        <RunningText items={['Item 1', 'Running Text 2']} theme={themeMode} />
      </VStack>
    </VStack>
  )
}
