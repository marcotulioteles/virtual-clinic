import { Button, Checkbox, Flex, Grid, HStack, Icon, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { BoxSymbolProfession } from '../components/BoxSymbolProfesssion'
import { Input } from "../components/Forms/Input";

export default function Register() {
  const [user, setUser] = useState('')

  return (
    <Flex width="100vw" height="auto" justify="center" align="center">
      <Flex
        width="1120px"
        height="750px"
        bgColor="gray.50"
        margin="50px"
        boxShadow="0px 35px 20px -20px rgba(0,0,0,0.3)"
      >
        <HStack>
          <Grid width="720px" height="100%" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
            <BoxSymbolProfession
              imageName="estetoscopio-icon"
              name="health care"
            />
            <BoxSymbolProfession
              imageName="psicologia-icon"
              name="psicologia"
            />
            <BoxSymbolProfession
              imageName="fisioterapia-icon"
              name="fisioterapia"
            />
            <BoxSymbolProfession
              imageName="dental-care-icon"
              name="dental care"
            />
            <BoxSymbolProfession
              imageName="nutricao-icon"
              name="nutrição"
            />
            <BoxSymbolProfession
              imageName="exames-icon"
              name="exames"
            />
          </Grid>login

          <Flex
            width="400px"
            height="100%"
            bgColor="white"
            justify="center"
            position="relative"
          >
            <VStack width="100%">
              <Flex
                width="100px"
                height="100px"
                borderRadius="50px"
                border="2px solid"
                borderColor="teal.400"
                align="center"
                justify="center"
                marginTop="20px"
              >
                <Icon as={RiLoginBoxLine} width="45px" height="45px" color="blue.600" />
              </Flex>
              <Text
                fontSize="1.625rem"
                fontWeight="700"
                color="teal.400"
              >Crie uma conta</Text>

              <Flex
                as="form"
                width="100%"
                height="550px"
                bgColor="teal.400"
                position="absolute"
                bottom="0"
                justify="center"
              >
                <VStack width="90%" spacing="42">
                  <Input
                    placeholder="email"
                    name="email"
                    type="email"
                    width="100%"
                    marginTop="42px"
                  />
                  <Input
                    placeholder="senha"
                    name="password"
                    type="password"
                    width="100%"
                  />

                  <Flex borderBottom="1px solid" borderColor="white" width="100%" height="55px" justify="center">
                    <RadioGroup onChange={setUser} value={user}>
                      <HStack spacing="10">
                        <Radio bgColor="white" value="professional"><Text color="white" fontWeight="600">sou um profissional</Text></Radio>
                        <Radio bgColor="white" value="patient"><Text color="white" fontWeight="600">sou paciente</Text></Radio>
                      </HStack>
                    </RadioGroup>
                  </Flex>

                  <Flex width="100%" justify="left">
                    <Checkbox><Text color="white" fontSize="0.75rem" fontWeight="600">Eu li e aceito os termos de uso do site</Text></Checkbox>
                  </Flex>

                  <Button
                    type="submit"
                    bgColor="blue.600"
                    color="white"
                    height="60px"
                    width="100%"
                    fontSize="1.625rem"
                  >
                    CADASTRAR
                  </Button>

                  <Flex color="white" fontSize="0.75rem" direction="column" marginTop="20px">
                    <Text>Já tem uma conta?</Text>
                    <Link href="/login">
                      <Text as="a" >faça login&nbsp;<Text as="span" fontSize="1.125rem" fontWeight="600">aqui</Text></Text>
                    </Link>
                  </Flex>

                </VStack>
              </Flex>

            </VStack>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  )
}