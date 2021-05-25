import { Button, Flex, Grid, HStack, Icon, Select, Text, VStack } from "@chakra-ui/react";
import { RiUserLine, RiSearchLine } from 'react-icons/ri'
import { Input } from "../components/Forms/Input";
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { normalizeCpf, normalizeCep } from '../utils/utilFunctions'

type userFormData = {
  name: string,
  last_name: string,
  birth_date: string,
  cpf: string,
  gender: string,
  marital_status: string,
  father: string,
  mother: string,
  cep: string,
  address: string,
  house_number: string,
  add_information_address: string,
  city: string,
  state: string,
  user_name: string,
  email: string,
}

const userFormSchema = yup.object().shape({
  name: yup.string().required('o campo nome é obrigatório'),
  last_name: yup.string().required('o campo sobrenome é obrigatório'),
  birth_date: yup.string().required('o campo data de nascimento é obrigatório'),
  cpf: yup.string().required('o campo CPF é obrigatório'),
  gender: yup.string(),
  marital_status: yup.string(),
  cep: yup.string().required('o campo CEP é obrigatório'),
  address: yup.string(),
  house_number: yup.string(),
  add_information_address: yup.string(),
  city: yup.string(),
  state: yup.string(),
  user_name: yup.string().required('o campo nome do usuário é obrigatório'),
  email: yup.string().required('o campo e-mail é obrigatório'),
  not_required: yup.string()
})

export default function userForm() {
  const [cep, setCep] = useState("")
  const [cpf, setCpf] = useState("")

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(userFormSchema)
  })

  const handleUserForm: SubmitHandler<userFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  const {errors} = formState
  
  const verifyCpf = () => {
    const value = cpf
    if (value ===  "") {
      return errors.cpf
    } else {
      return errors.not_required
    }
  }

  return (
    <Flex
      as="section"
      width="100vw"
      height="auto"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        width="1200px"
        align="center"
        justify="center"
        direction="column"
        bgColor="gray.50"
        margin="50px"
        boxShadow="0px 35px 20px -25px rgba(0,0,0,0.25)"
        onSubmit={handleSubmit(handleUserForm)}
      >

        <Flex
          width="95%"
          height="128px"
          align="left"
          justify="center"
          direction="column"
          borderBottom="2px solid"
          borderColor="blue.600"
        >
          <Flex>
            <Icon
              as={RiUserLine}
              width="36px"
              height="36px"
              color="teal.400"
            />
            <Text
              fontWeight="700"
              fontSize="1.625rem"
              color="blue.600"
            >
              CADASTRO DE PACIENTE
            </Text>
          </Flex>
          <Text fontSize="0.75rem">Preencha todos os dados abaixo. Os dados com * são campos obrigatórios</Text>
        </Flex>
        <Flex
          width="95%"
          height="auto"
          align="left"
          marginTop="42px"
          marginBottom="42px"
        >
          <VStack width="100%" align="left">
            <Text fontWeight="500" fontSize="1.625rem" color="blue.600">DADOS PESSOAIS</Text>
            <HStack>
              <Input
                label="* Nome:"
                type="text"
                name="name"
                border="1px solid"
                borderColor="teal.400"
                {...register('name')}
                error={errors.name}
              />
              <Input
                label="* Sobrenome:"
                type="text"
                name="last_name"
                border="1px solid"
                borderColor="teal.400"
                {...register('last_name')}
                error={errors.last_name}
              />
            </HStack>
            <HStack align="center">
              <Input
                label="Data de Nascimento:"
                type="date"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                name="birth_date"
                border="1px solid"
                borderColor="teal.400"
                {...register('birth_date')}
                error={errors.birth_date}
              />
              <Input
                label="* CPF:"
                type="text"
                name="cpf"
                border="1px solid"
                borderColor="teal.400"
                {...register('cpf')}
                error={verifyCpf()}
                onChange={(event) => {
                  const {value} = event.target
                  event.target.value = normalizeCpf(value)
                  setCpf(value)
                }}
              />
              <VStack align="left" spacing="1">
                <Text>
                  Sexo:
                </Text>
                <Select
                  name="gender"
                  placeholder="Selecione uma opção"
                  height="48px"
                  width="240px"
                  border="1px solid"
                  borderColor="teal.400"
                  {...register('gender')}
                  error={errors.gender}
                >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </Select>
              </VStack>
              <Input
                label="Estado Civil:"
                type="text"
                name="marital_status"
                border="1px solid"
                borderColor="teal.400"
                {...register('marital_status')}
                error={errors.marital_status}
              />
            </HStack>
            <HStack>
              <Input
                label="Nome do Pai:"
                type="text"
                name="father"
                border="1px solid"
                borderColor="teal.400"
                {...register('father')}
                error={errors.father}
              />
              <Input
                label="Nome da Mãe:"
                type="text"
                name="mother"
                border="1px solid"
                borderColor="teal.400"
                {...register('mother')}
                error={errors.mother}
              />
            </HStack>
          </VStack>
        </Flex>

        <Flex
          width="95%"
          height="auto"
          align="left"
          marginBottom="42px"
        >
          <VStack width="100%" align="left">
            <Text fontWeight="500" fontSize="1.625rem" color="blue.600">ENDEREÇO PESSOAL</Text>
            <Grid templateColumns="auto auto 1fr auto" columnGap="2" alignItems="end">
              <Input
                width="200px"
                label="* CEP:"
                type="text"
                name="cep"
                border="1px solid"
                borderColor="teal.400"
                {...register('cep')}
                onChange={(event) => {
                  const {value} = event.target
                  event.target.value = normalizeCep(value)
                  
                  if ((value === "" || value.replace(/\D/gim,'').length < 8) ? (
                    setValue('address', ''),
                    setValue('city', ''),
                    setValue('state', '')
                  ) : value)
                  
                  setCep(value.replace(/\D/gim,''))
                }}
              />
              <Flex>
                <Button
                  color="white"
                  bgColor="teal.400"
                  leftIcon={<RiSearchLine />}
                  height="48px"
                  onClick={async() => {
                    try {
                      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
                      const viaCep = await response.json()

                      setValue("address", viaCep.logradouro)
                      setValue("city", viaCep.localidade)
                      setValue("state", viaCep.uf)
                    } catch (error) {
                      window.alert('Não há dados na pesquisa de CEP')  
                    }
                  }}
                >
                  CEP
                </Button>
              </Flex>
              <Input
                label="Logradouro (rua, avenida, etc..):"
                type="text"
                name="address"
                border="1px solid"
                borderColor="teal.400"
                {...register('address')}
                error={errors.address}
              />
              <Input
                width="150px"
                label="Número:"
                type="text"
                name="house_number"
                border="1px solid"
                borderColor="teal.400"
                {...register('house_number')}
                error={errors.house_number}
              />
            </Grid>
            <Grid templateColumns="1fr 1fr auto" columnGap="2">
              <Input
                label="Complemento:"
                type="text"
                name="add_information_address"
                border="1px solid"
                borderColor="teal.400"
                {...register('add_information_address')}
                error={errors.add_information_address}
              />
              <Input
                label="Cidade"
                type="text"
                name="city"
                border="1px solid"
                borderColor="teal.400"
                {...register('city')}
                error={errors.city}
              />
              <Input
                width="120px"
                label="Estado (UF):"
                type="text"
                name="state"
                border="1px solid"
                borderColor="teal.400"
                {...register('state')}
                error={errors.state}
              />
            </Grid>
          </VStack>
        </Flex>

        <Flex
          width="95%"
          height="auto"
          align="left"
          marginBottom="42px"
        >
          <VStack width="100%" align="left">
            <Text fontWeight="500" fontSize="1.625rem" color="blue.600">DADOS DE ACESSO À PLATAFORMA</Text>
            <Grid templateColumns="1fr 1fr" columnGap="2">
              <Input
                label="* Nome de usuário:"
                type="text"
                name="user_name"
                border="1px solid"
                borderColor="teal.400"
                {...register('user_name')}
                error={errors.user_name}
              />
              <Input
                label="* e-mail:"
                type="email"
                name="email"
                border="1px solid"
                borderColor="teal.400"
                {...register('email')}
                error={errors.email}
              />
            </Grid>
          </VStack>
        </Flex>

        <Grid width="95%" templateColumns="1fr 1fr" alignItems="center">
          <Flex
            width="95%"
            height="auto"
            align="left"
            marginBottom="42px"
          >
            <VStack width="100%" align="left">
              <Text fontWeight="500" fontSize="1.625rem" color="blue.600"
              >
                FOTO DO PERFIL
              </Text>
              <Text fontSize="0.75rem">Será utilizado para identificar seu perfil na plataforma, como também
                para marcações.</Text>
              <Flex
                width="380px"
                height="120px"
                bgColor="white"
                border="1px solid"
                borderColor="teal.400"
                borderRadius="8px"
                align="center"
                justify="center"
              >
                <Button
                  width="160px"
                  height="40px"
                  borderRadius="8px"
                  bgColor="teal.400"
                  color="white"
                  fontSize="0.75rem"
                >
                  Escolha uma foto
              </Button>
                <Text
                  fontSize="0.75rem"
                  color="gray.500"
                  marginLeft="2"
                >
                  ou arreste um arquivo aqui...
              </Text>
              </Flex>
            </VStack>
          </Flex>

          <Button
            justifySelf="end"
            type="submit"
            width="300px"
            height="80px"
            bgColor="blue.600"
            color="white"
            fontSize="1.625rem"
            boxShadow="0px 35px 20px -20px rgba(0,0,0,0.25)"
            isLoading={formState.isSubmitting}
          >
            ENVIAR CADASTRO
          </Button>
        </Grid>
      </Flex>
    </Flex>
  )
}