import { SystemStyleObject, Text, VStack } from '@chakra-ui/react'
import { IInformationCardProps } from './InformationCard.props'
import { styles } from './InformationCard.style'
import { EThemeMode } from '@renderer/constants'

export const InformationCard = ({ title, children, style, theme }: IInformationCardProps) => {
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
    <VStack sx={{ ...styles.card, ...background(theme), ...style }}>
      {/* Title */}
      {title ? (
        <Text fontWeight={'extrabold'} fontSize={{ base: 'sm', md: 'lg', lg: '2xl' }}>
          {title}
        </Text>
      ) : null}

      {/* Children */}
      {children}
    </VStack>
  )
}
