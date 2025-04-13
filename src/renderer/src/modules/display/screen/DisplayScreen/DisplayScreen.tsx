import { FC } from 'react'
import { HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { spacingScale } from '@renderer/styles'
import { useThemeMode } from '@renderer/themes'
import { InformationCard, VideoBanner } from './components'
import { styles } from './DisplayScreen.style'

export const DisplayScreen: FC = () => {
  const { themeMode } = useThemeMode()

  return (
    <Stack sx={styles.container}>
      {/* Left */}
      <VStack sx={styles.left}>
        {/* Video Banner */}
        <VideoBanner embedId={'2Gub8-cSH9c'} />

        {/* Date & Time */}
        <HStack
          sx={{
            flex: 1,
            maxHeight: '40%',
            alignItems: 'flex-start',
            width: '100%',
            gap: spacingScale['3xL']
          }}
        >
          {/* Date */}
          <InformationCard
            title={'Today Date:'}
            theme={themeMode}
            style={{
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <Text fontWeight={'extrabold'} lineHeight={'none'} fontSize={'6xl'}>
              {`15`} <br />
              {`January`} <br />
              {`2025`} <br />
            </Text>
          </InformationCard>

          {/* Time */}
          <InformationCard
            title={'Time:'}
            theme={themeMode}
            style={{
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <Text fontWeight={'extrabold'} lineHeight={'none'} fontSize={'170px'}>
              15:00
            </Text>
          </InformationCard>
        </HStack>
      </VStack>

      {/* Right */}
      <VStack sx={styles.right}></VStack>
    </Stack>
  )
}
