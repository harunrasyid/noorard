import { HStack, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { styles } from './InformationSection.style'
import { InformationCard } from '../InformationCard'
import { IInformationSectionProps } from './InformationSection.props'

export const InformationSection = ({ theme }: IInformationSectionProps) => {
  return (
    <HStack sx={styles.container}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        style={{
          height: '100%'
        }}
      >
        <SwiperSlide>
          <InformationCard title={'Time:'} theme={theme} style={styles.card}>
            <Text
              fontWeight={'extrabold'}
              lineHeight={'none'}
              fontSize={{ base: '4xl', md: '6xl', lg: '9xl' }}
            >
              15:00
            </Text>
          </InformationCard>
        </SwiperSlide>
      </Swiper>
    </HStack>
  )
}
