import { HStack, SystemStyleObject, Text, VStack } from '@chakra-ui/react'
import { EThemeMode } from '@renderer/constants'
import { IScheduleCardProps, EScheduleCardVariant } from './ScheduleCard.props'
import { styles } from './ScheduleCard.style'

export const ScheduleCard = ({
  title,
  time,
  variant = EScheduleCardVariant.Default,
  theme
}: IScheduleCardProps) => {
  const background = (
    currentTheme?: EThemeMode,
    currentVariant?: EScheduleCardVariant
  ): SystemStyleObject => {
    switch (currentVariant) {
      case EScheduleCardVariant.Active: {
        switch (currentTheme) {
          case EThemeMode.Morning:
            return styles.morningActiveBackground
          case EThemeMode.Afternoon:
            return styles.afternoonActiveBackground
          default:
            return styles.nightActiveBackground
        }
      }
      default: {
        switch (currentTheme) {
          case EThemeMode.Morning:
            return styles.morningBackground
          case EThemeMode.Afternoon:
            return styles.afternoonBackground
          default:
            return styles.nightBackground
        }
      }
    }
  }

  const isActive = variant === EScheduleCardVariant.Active

  const activeTextColor = isActive ? styles.activeTextColor : undefined

  return (
    <HStack sx={{ ...styles.card, ...background(theme, variant) }}>
      {/* Left */}
      <VStack sx={styles.left}>
        {isActive && (
          <Text sx={{ ...styles.activeText, ...activeTextColor }}>{`Next Prayer:`}</Text>
        )}
        <Text sx={{...styles.titleText, ...activeTextColor}}>{title}</Text>
      </VStack>

      {/* Right */}
      <VStack>
        <Text sx={{...styles.timeText, ...activeTextColor }}>{time}</Text>
      </VStack>
    </HStack>
  )
}
