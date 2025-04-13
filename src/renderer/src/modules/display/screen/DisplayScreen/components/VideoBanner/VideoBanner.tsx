import { VStack } from '@chakra-ui/react'
import { IVideoBannerProps } from './VideoBanner.props'
import { styles } from './VideoBanner.style'

export const VideoBanner = ({ embedId, style: styleOverride }: IVideoBannerProps) => {
  return (
    <VStack sx={{ ...styles.videoContainer, ...styleOverride }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&controls=0&mute=1&modestbranding=1&rel=0&showinfo=0`}
        title="Video banner"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </VStack>
  )
}
