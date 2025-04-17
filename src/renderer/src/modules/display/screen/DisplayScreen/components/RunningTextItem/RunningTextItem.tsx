import { Box, HStack, Text } from '@chakra-ui/react'
import { useThemeMode } from '@renderer/themes'
import { EThemeMode } from '@renderer/constants'
import { IRunningTextItemProps } from './RunningTextItem.props'
import { styles } from './RunningTextItem.style'


export const RunningTextItem = ({ text }: IRunningTextItemProps) => {
  const { themeMode } = useThemeMode()

  return (
    <HStack>
      <Text sx={styles.text}>{text}</Text>
      <Box
        sx={{
          ...styles.box,
          ...(themeMode === EThemeMode.Morning
            ? styles.boxMorning
            : themeMode === EThemeMode.Afternoon
              ? styles.boxAfternoon
              : styles.boxNight)
        }}
      />
    </HStack>
  )
}
