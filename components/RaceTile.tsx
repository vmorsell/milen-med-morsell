import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/core'
import { NextChakraLink } from '../components/NextChakraLink'
import { rfcToReadable, rfcTimeTo } from '../utils/date'
import { IRace } from '../@types/generated/contentful'

export interface RaceTileProps {
  race: IRace
}

export const RaceTile = ({ race }: RaceTileProps) => {
  const imageOverlay = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(0 , 0, 0, 0.4)'
  )
  return (
    <NextChakraLink
      key={race.sys.id}
      href={`/races/${race.fields.slug}`}
      style={{ textDecoration: 'none' }}
    >
      <Box
        py="4"
        px="8"
        my="4"
        position="relative"
        rounded="lg"
        overflow="hidden"
        transition="transform 0.2s ease"
        _hover={{ transform: 'scale(1.025)' }}
      >
        <Box
          position="absolute"
          top="-16px"
          left="-16px"
          right="-16px"
          bottom="-16px"
          background={`linear-gradient(${imageOverlay},${imageOverlay}), url(${race.fields.image.fields.file.url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          zIndex="-10"
          style={{ filter: 'blur(8px)' }}
        ></Box>
        <Heading as="h2" size="md">
          {race.fields.title}
        </Heading>
        <Text>
          {rfcToReadable(race.fields.date)} ({rfcTimeTo(race.fields.date)})
        </Text>
      </Box>
    </NextChakraLink>
  )
}