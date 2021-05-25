import { Flex, Image, Text } from "@chakra-ui/react";

export function FirstSectionHome() {
  return (
    <Flex
      width={{ base: "100vw", xl: "1200px" }}
      height={{ base: "auto", xl: "600px" }}
      justify="space-between"
      align="center"
      direction={{ base: "column", xl: "row" }}
      my={{ base: "36px", xl:"0" }}
    >
      <Text
        color="blue.600"
        fontSize={{base:"2.4rem", md:"2.8rem", xl: "3rem"}}
        fontWeight="700"
        marginBottom={{ base: "36px", xl: "0" }}
      >
          Agendar sua <br />
          consulta nunca <br />
          foi tão <Text as="span" color="teal.400">fácil</Text>...
        </Text>
      <Image
        src="/images/laptop-and-logo.png"
        objectFit="contain"
        height={{base:"18rem", md:"21rem" ,xl:"24rem"}}
      />
    </Flex>
  )
}