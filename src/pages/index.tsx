import { Flex, VStack } from '@chakra-ui/react'
import { FirstSectionHome } from '../components/HomeSections/FirstSectionHome'
import { FourthSectionHome } from '../components/HomeSections/FourthSectionHome'
import { SecondSectionHome } from '../components/HomeSections/SecondSectionHome'
import { ThirdSectionHome } from '../components/HomeSections/ThirdSectionHome'

export default function Home() {
  return (
    <Flex>
      <VStack spacing="0">
        <FirstSectionHome/>
        <SecondSectionHome/>
        <ThirdSectionHome/>
        <FourthSectionHome/>
      </VStack>
    </Flex>
  )
}
