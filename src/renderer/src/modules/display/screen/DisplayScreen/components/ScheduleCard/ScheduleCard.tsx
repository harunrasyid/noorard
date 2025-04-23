import { HStack, SystemStyleObject, Text, VStack } from '@chakra-ui/react'
import { IScheduleCardProps } from './ScheduleCard.props'
import { styles } from './ScheduleCard.style'
import { EThemeMode } from '@renderer/constants'

export const ScheduleCard = ({ theme }: IScheduleCardProps) => {
  const background = (currentTheme?: EThemeMode): SystemStyleObject => {
    switch (currentTheme) {
      case EThemeMode.Morning:
        return styles.morningBackground
      case EThemeMode.Afternoon:
        return styles.afternoonBackground
      default:
        return styles.nightBackground
    }
  }

  return (
    <HStack sx={{ ...styles.card, ...background(theme) }}>
      {/* Left */}
      <VStack>
        <Text
          sx={{
            fontWeight: 'extrabold',
            fontSize: '4xl'
          }}
        >
          Subuh
        </Text>
      </VStack>

      {/* Right */}
      <VStack>
        <Text
          sx={{
            fontWeight: 'extrabold',
            fontSize: '6xl'
          }}
        >
          15:00
        </Text>
      </VStack>
    </HStack>
  )
}
