import { Flex, Image, Text, Box } from "@chakra-ui/react";

interface BoxSymbolProfessionProps {
  imageName: string;
  name: string;
}

export function BoxSymbolProfession({ imageName, name }: BoxSymbolProfessionProps) {
  return(
    <Flex justify="center" align="center" direction="column">
      <Flex
        width="120px"
        height="120px"
        bgColor="white"
        align="center"
        justify="center"
        boxShadow="0px 25px 20px -20px rgba(0,0,0,0.25)"
        marginBottom="16px"
      >
        <Image src={`/images/${imageName}.svg`}/>
      </Flex>
      <Text fontWeight="600" color="teal.400">{name}</Text>
      <Box
        width="48px"
        height="16px"
        borderBottom="4px solid"
        borderColor="blue.600"
      />
    </Flex>
  )
}