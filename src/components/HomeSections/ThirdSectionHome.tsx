import { Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { FasterAccessButton } from "../FasterAccessButton";

export function ThirdSectionHome() {
  return (
    <Flex
      width="100vw"
      height={{ base: "full", xl: "600px" }}
      background="gray.50"
      justify="center"
    >
      <VStack spacing="0">
        <Flex
          width={{ xl: "1200px" }}
          height={{ base:"fit-content", xl: "240px" }}
          borderBottom={{ xl: "2px solid" }}
          borderColor="teal.600"
          align="center"
          justify="center"
          marginBottom={{ xl: "100px" }}
          textAlign="center"
        >
          <Text
            fontSize={{base:"2.4rem", md:"2.8rem", xl: "3rem"}}
            fontWeight="600"
            color="teal.600"
            my="16px"
          >
            Acesso Rápido
          </Text>
        </Flex>

        <Flex h="fit-content" paddingBottom="32px">
          <Grid
            templateColumns={{ base: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            gap={{ base: "16px", xl: "inherit" }}
            justifyContent="space-between"
            width={{ xl: "1200px" }}
          >
            <FasterAccessButton buttonName="profissionais" iconFileName="doctor-icon.svg" />
            <FasterAccessButton buttonName="produtos" iconFileName="box-products-icon.svg" />
            <FasterAccessButton buttonName="serviços" iconFileName="estetoscopio-icon.svg" />
            <FasterAccessButton buttonName="atendimento" iconFileName="phone-icon.svg" />
          </Grid>
        </Flex>
      </VStack>
    </Flex>
  )
}