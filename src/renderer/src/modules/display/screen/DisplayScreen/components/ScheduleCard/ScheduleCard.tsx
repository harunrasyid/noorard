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
  const getStyle = (
    type: 'Background' | 'Text',
    theme?: EThemeMode,
    variant?: EScheduleCardVariant
  ): SystemStyleObject => {
    const variantPrefix = variant === EScheduleCardVariant.Active ? 'Active' : ''
    const themeKey =
      theme === EThemeMode.Morning
        ? 'morning'
        : theme === EThemeMode.Afternoon
          ? 'afternoon'
          : 'night'

    const styleKey = `${themeKey}${variantPrefix}${type}` as keyof typeof styles
    return styles[styleKey]
  }

  const background = (theme?: EThemeMode, variant?: EScheduleCardVariant): SystemStyleObject =>
    getStyle('Background', theme, variant)

  const text = (theme?: EThemeMode, variant?: EScheduleCardVariant): SystemStyleObject =>
    getStyle('Text', theme, variant)

  const isActive = variant === EScheduleCardVariant.Active

  return (
    <HStack sx={{ ...styles.card, ...background(theme, variant) }}>
      {/* Left */}
      <VStack sx={styles.left}>
        {isActive && (
          <Text sx={{ ...styles.activeText, ...text(theme, variant) }}>{`Next Prayer:`}</Text>
        )}
        <Text sx={{ ...styles.titleText, ...text(theme, variant) }}>{title}</Text>
      </VStack>

      {/* Right */}
      <VStack>
        <Text sx={{ ...styles.timeText, ...text(theme, variant) }}>{time}</Text>
      </VStack>
    </HStack>
  )
}
