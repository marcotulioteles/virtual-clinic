import { Flex, Grid, Text } from "@chakra-ui/react";
import { ProductPublish } from "../ProductPublish";

export function FourthSectionHome() {
  return (
    <Flex
      width="100vw"
      height={{ base: "fit-content", xl: "600px" }}
      background="blueGradient.600"
      flexDirection="column"
      justify="top"
      align="center"
      textAlign="center"
    >
      <Text
        fontSize={{base:"2.4rem", md:"2.8rem", xl: "3rem"}}
        fontWeight="600"
        color="white"
        lineHeight="4rem"
        marginTop={24}
        marginBottom={100}
      >
        Produtos em destaque
        </Text>

      <Grid 
        width={{ xl:"1200px" }} 
        templateColumns={{base:"1fr 1fr", xl:"repeat(4, 1fr)"}}
        justifyContent="space-between"
        gap="32px"
        paddingBottom="32px"
      >
        <ProductPublish
          description="Oximetro Digital Medidor De Saturação De Oxigênio No Sangue"
          price="59,99"
        />
        <ProductPublish
          description="Oximetro Digital Medidor De Saturação De Oxigênio No Sangue"
          price="59,99"
        />
        <ProductPublish
          description="Oximetro Digital Medidor De Saturação De Oxigênio No Sangue"
          price="59,99"
        />
        <ProductPublish
          description="Oximetro Digital Medidor De Saturação De Oxigênio No Sangue"
          price="59,99"
        />
      </Grid>
    </Flex>
  )
}