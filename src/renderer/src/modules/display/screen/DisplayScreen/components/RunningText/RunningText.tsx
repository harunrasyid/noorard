import { HStack, SystemStyleObject, VStack } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import { RunningTextItem } from '../RunningTextItem'
import { styles } from './RunningText.style'
import { IRunningTextProps } from './RunningText.props'
import { EThemeMode } from '@renderer/constants'

export const RunningText = ({ items, theme }: IRunningTextProps) => {
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
    <VStack sx={{ ...styles.container, ...background(theme) }}>
      <Marquee style={{ height: '100%' }}>
        <HStack sx={styles.itemsContainer}>
          {items.map((item, index) => {
            return <RunningTextItem key={index} text={item} />
          })}
        </HStack>
      </Marquee>
    </VStack>
  )
}
