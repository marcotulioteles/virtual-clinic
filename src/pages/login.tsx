import { Box, Button, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from '../components/Forms/Input'

type LoginFormData = {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup.string().required('e-mail é obrigatório').email('formato de e-mail inválido'),
  password: yup.string().required('senha é obrigatória')
})

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginFormSchema)
  })

  const { errors } = formState

  const handleLogin: SubmitHandler<LoginFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  return (
    <>
      <Box
        position="relative"
      >
        <Box
          bgImage="url('/images/doctor-background.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          height="672px"
          opacity="0.25"
        />
        <Flex
          justify="center"
          align="center"
          width="100%"
          height="672px"
          position="absolute"
          top="0"
        >
          <Flex
            justify="center"
            align="center"
            h="672px"
            maxWidth="1200px"
          >
            <Stack direction="row" spacing={{ base: "0", xl: "96px" }} align="center">
              <Flex
                width="600px"
                height="360px"
                justify="center"
                align="left"
                direction="column"
                display={{ base: "none", xl: "inherit" }}
              >
                <Text
                  as="p"
                  fontSize="2rem"
                  color="teal.400"
                  lineHeight="2rem">
                  Bem vindo ao
                </Text>
                <Text
                  as="h1"
                  fontSize="4.25rem"
                  color="teal.400"
                  lineHeight="4.25rem"
                  fontWeight="600"
                  marginBottom="26px"
                >
                  VIRTUAL CLINIC
              </Text>
                <Image src="/images/logo-virtual-clinic.png" height="230px" width="288px" />
              </Flex>

              <Flex
                width={{ base: "90vw", sm: "75vw", md: "50vw", lg: "40vw", xl: "400px" }}
                height="564px"
                justify="center"
                bgColor="white"
                boxShadow="0px 35px 20px -20px rgba(0,0,0,0.2)"
                textAlign="center"
              >
                <VStack align="center">

                  <Image
                    src="/images/small-logo-virtual-clinic.png"
                    width="120px"
                    height="120px"
                    marginTop="18px"
                  />
                  <Text
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="teal.400"
                    paddingBottom="14px"
                  >
                    VIRTUAL CLINIC
                </Text>

                  <Flex
                    width={{ base: "90vw", sm: "75vw", md: "50vw", lg: "40vw", xl: "400px" }}
                    height="372px"
                    justify="center"
                    bgColor="teal.400"
                  >
                    <Box
                      as="form"
                      width="90%"
                      marginTop="44px"
                      onSubmit={handleSubmit(handleLogin)}
                    >
                      <Flex direction="column" width="100%">
                        <Input
                          name="email"
                          type="email"
                          placeholder="e-mail"
                          {...register('email')}
                          error={errors.email}
                        />
                        <Input
                          marginTop="30px"
                          name="password"
                          type="password"
                          placeholder="senha"
                          {...register('password')}
                          error={errors.password}
                        />
                        <Button
                          type="submit"
                          marginTop="30px"  
                          height="54px"
                          color="white"
                          bgColor="blue.600"
                          fontSize="24px"
                          isLoading={formState.isSubmitting}
                        >
                          LOGIN
                        </Button>
                      </Flex>

                      <Flex marginTop="30px" direction="column">
                        <Link href="/">
                          <Text
                            as="a"
                            color="white"
                            lineHeight="14px"
                            fontSize="0.75rem"
                          >
                            não tem uma conta?
                      </Text>
                        </Link>
                        <Link href="/register">
                          <Text as="a" marginTop="5px" color="white" fontSize="0.75rem">registre-se gratuitamente&nbsp;<Text as="span" fontWeight="600" fontSize="1.125rem">aqui</Text></Text>
                        </Link>
                      </Flex>

                    </Box>
                  </Flex>

                </VStack>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}