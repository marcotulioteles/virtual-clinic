import { Flex, Grid, Image, Text } from "@chakra-ui/react";

export interface MiniProfessionalCardProps {
  name: string;
  profession: string;
  professional_number: string;
  description: string;
  id: number;
  avatar: string;
  especialized_in: string
}

export function MiniProfessionalCard({ 
  avatar,
  description,
  id,
  name,
  profession,
  professional_number,
  especialized_in
 }: MiniProfessionalCardProps) {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      height="440px"
      width="280px"
      bgColor="white"
      borderRadius="8px"
      boxShadow="0px 025px 20px -20px rgba(0,0,0,0.25)"
    >
      <Image
        src={avatar}
        width="80px"
        height="80px"
        borderRadius="40px"
        marginBottom="8px"
        objectFit="cover"
      />
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Text
          fontWeight="700"
          color="blue.600"
          fontSize="1.125rem"
          lineHeight="1.25rem"
        >
          {name}
        </Text>
        <Text
          fontWeight="400"
          fontSize="0.75rem"
          color="blue.600"
          lineHeight="0.85rem"
          marginBottom="12px"
        >
          {profession} - CRM: {professional_number}</Text>
        <Text
          fontWeight="400"
          fontSize="0.625rem"
          color="teal.400"
          lineHeight="0.75rem"
        >
          Especialista em:
        </Text>
        <Text
          fontWeight="700"
          fontSize="1.5rem"
          color="teal.400"
          lineHeight="1.625rem"
        >
          {especialized_in}
        </Text>
      </Flex>
      <Flex
        textAlign="left"
        direction="column"
        width="80%"
      >
        <Text
          fontWeight="400"
          fontSize="0.75rem"
          color="teal.400"
          marginTop="20px"
          marginBottom="4px"
        >
          Descrição:
        </Text>
        <Text
          fontWeight="400"
          fontSize="0.75rem"
          color="blue.600"
          textAlign="justify"
          lineHeight="0.90rem"
        >
          {description}  
        </Text>
      </Flex>
      <Grid
        templateColumns="auto 1fr"
        width="80%"
        marginTop="18px"
      >
        <Text
          fontWeight="400"
          fontSize="0.75rem"
          color="teal.400"
        >
          Atuam em:
        </Text>
        <Text
          textAlign="right"
          fontWeight="400"
          fontSize="0.75rem"
          color="blue.600"
        >
          Uberlândia-MG, São Paulo-SP
        </Text>
      </Grid>
      <Flex
        width="80%"
        textAlign="left"
      >
        <Text fontWeight="400" fontSize="0.75rem" color="teal.400">Pagamentos:</Text>
        <Image></Image>
        <Image></Image>
        <Image></Image>
      </Flex>
    </Flex>
  )
}