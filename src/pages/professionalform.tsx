import { Button, Checkbox, Flex, Grid, HStack, Icon, Image, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../components/Forms/Input";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { normalizeCpf, normalizeCep } from '../utils/utilFunctions'

type professionalFormData = {
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
})

export default function professionalForm() {
  const [cep, setCep] = useState('')
  const [cpf, setCpf] = useState('')

  const { register, setValue, handleSubmit, formState } = useForm({
    resolver: yupResolver(userFormSchema)
  })

  const handleProfessionalForm: SubmitHandler<professionalFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  const { errors } = formState 

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
      width="100vw"
      height="auto"
      justify="center"
      align="center"
    >

      <Flex
        as="form"
        width="1200px"
        height="auto"
        bgColor="gray.50"
        justify="center"
        align="center"
        direction="column"
        boxShadow="0px 35px 20px -20px rgba(0,0,0,0.25)"
        margin="50px"
        onSubmit={handleSubmit(handleProfessionalForm)}
      >
        <Flex
          direction="column"
          width="95%"
          height="124px"
          justify="center"
          borderBottom="2px solid"
          borderColor="blue.600"
          marginBottom="42px"
        >
          <HStack>
            <Image src="/images/doctor-icon.svg" height="42px" />
            <Text
              fontSize="1.625rem"
              color="blue.600"
              fontWeight="700"
            >
              CADASTRO DE PROFISSIONAL
            </Text>
          </HStack>
          <Text fontSize="0.75rem">Preencha todos os dados abaixo. Os dados com * são campos obrigatórios</Text>
        </Flex>

        <Flex direction="column" width="95%" marginBottom="42px">
          <Text
            fontSize="1.625rem"
            color="blue.600"
          >
            DADOS PESSOAIS
          </Text>
          <HStack marginBottom="14px">
            <Input
              id="id_name"
              name="name"
              type="text"
              borderColor="teal.400"
              label="* Nome:"
            />
            <Input
              id="id_last_name"
              name="last_name"
              type="text"
              borderColor="teal.400"
              label="* Sobrenome:"
            />
          </HStack>
          <Grid templateColumns="repeat(3, 1fr) auto" columnGap="2" marginBottom="14px">
            <Input
              id="id_birth_date"
              name="birth_date"
              type="date"
              borderColor="teal.400"
              label="Data de Nascimento:"
            />
            <Input
              id="id_cpf"
              name="cpf"
              type="text"
              borderColor="teal.400"
              label="* CPF:"
              onChange={(event) => {
                const {value} = event.target
                event.target.value = normalizeCpf(value)
                setCpf(value)
              }}
              error={verifyCpf()}
            />
            <Input
              id="id_marital_status"
              name="marital_status"
              type="text"
              borderColor="teal.400"
              label="Estado Civil:"
            />
            <VStack spacing="0" align="left">
              <Text>Sexo:</Text>
              <Select
                placeholder="selecione uma opção"
                borderColor="teal.400"
                height="48px"
                color="blue.600"
                bgColor="white"
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </Select>
            </VStack>
          </Grid>
          <HStack>
            <Input
              id="id_mother"
              name="mother"
              type="text"
              borderColor="teal.400"
              label="* Nome da Mãe:"
            />
            <Input
              id="id_father"
              name="father"
              type="text"
              borderColor="teal.400"
              label="* Nome do Pai:"
            />
          </HStack>
        </Flex>

        <Flex direction="column" width="95%" marginBottom="42px">
          <Text
            fontSize="1.625rem"
            color="blue.600"
          >
            ENDEREÇO PESSOAL
          </Text>
          <Grid
            templateColumns="1fr auto auto 1fr"
            columnGap="2"
            marginBottom="14px"
            alignItems="end"
          >
            <Input
              id="id_cep"
              name="cep"
              type="text"
              borderColor="teal.400"
              label="* CEP:"
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
              width="550px"
              id="id_address"
              name="address"
              type="text"
              borderColor="teal.400"
              label="* Logradouro (rua, avenida, etc...):"
              {...register('address')}
              error={errors.address}
            />
            <Input
              id="id_house_number"
              name="house_number"
              type="text"
              borderColor="teal.400"
              label="* número:"
            />
          </Grid>
          <Grid templateColumns="1fr 1fr 1fr" columnGap="2">
            <Input
              id="id_additional_address"
              name="additional_address"
              type="text"
              borderColor="teal.400"
              label="Complemento:"
              {...register('additional_address')}
              error={errors.additional_address}
            />
            <Input
              id="id_city"
              name="city"
              type="text"
              borderColor="teal.400"
              label="Cidade:"
              {...register('city')}
              error={errors.city}
            />
            <Input
              id="id_state"
              name="state"
              type="text"
              borderColor="teal.400"
              label="Estado (UF):"
              {...register('state')}
              error={errors.state}
            />
          </Grid>
        </Flex>

        <Flex direction="column" width="95%" marginBottom="42px">
          <Text
            fontSize="1.625rem"
            color="blue.600"
          >
            DADOS DO PROFISSIONAL
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" columnGap="2" marginBottom="14px">
            <Input
              id="id_professional_number"
              name="professional_number"
              type="text"
              borderColor="teal.400"
              label="* Número do Registro Profissional:"
              {...register('professional_number')}
              error={errors.professional_number}
            />
            <Input
              id="id_university_name"
              name="university_name"
              type="text"
              borderColor="teal.400"
              label="Nome da Instituição em que se formou:"
              {...register('university_name')}
              error={errors.university_name}
            />
          </Grid>
          <Input
            width="560px"
            id="id_profession"
            name="profession"
            type="text"
            borderColor="teal.400"
            label="* Profissão:"
            marginBottom="14px"
            {...register('profession')}
              error={errors.profession}         
          />
          <Grid templateColumns="repeat(2, 1fr)" columnGap="2" alignItems="end" marginBottom="14px">
            <Flex direction="column" justifyItems="end">
              <HStack align="center" marginBottom="7px" spacing="2">
                <Text fontSize="0.875rem">* Especialização:</Text>
                <Checkbox><Text fontSize="0.875rem">Não possuo especialização</Text></Checkbox>
              </HStack>
              <Input
                id="id_especialization"
                name="especialization"
                type="text"
                borderColor="teal.400"
                {...register('especialization')}
              error={errors.especialization}
              />
            </Flex>
            <Input
              id="id_especialization_number"
              name="especialization_number"
              type="text"
              borderColor="teal.400"
              label="RQE (Registro de Qualificação na Especialidade):"
              {...register('especialization_number')}
              error={errors.especialization_number}
            />
          </Grid> 
          <Input
            width="560px"
            id="id_especialization_institute"
            name="especialization_institute"
            type="text"
            borderColor="teal.400"
            label="Nome da Instituição em que se especializou:"
            marginBottom="14px"
            {...register('especialization_institute')}
              error={errors.especialization_institute}            
          />
          <VStack align="left">
            <Text fontSize="0.875rem">Resumo Profissional:</Text>
            <Textarea 
              placeholder="Descreva brevemente seu currículo profissional 
                para ser mostrado na sua página inicial do 
                currículo. Essa informação poderá ser altera
                da em outro momento, porém agora ela é 
                obrigatória."
              border="1px solid"
              borderColor="teal.400"
              height="290px"
              bgColor="white"
              name="professional_resume"
              {...register('professional_resume')}
              error={errors.professional_resume}
            />
          </VStack>
        </Flex>

        <Flex direction="column" width="95%" marginBottom="42px">
          <Text
            fontSize="1.625rem"
            color="blue.600"
          >
            ENDEREÇO PROFISSIONAL
          </Text>
          <Grid
            templateColumns="1fr auto auto 1fr"
            columnGap="2"
            marginBottom="14px"
            alignItems="end"
          >
            <Input
              id="id_professional_cep"
              name="professional_cep"
              type="text"
              borderColor="teal.400"
              label="* CEP:"
            />
            <Flex>
              <Button
                color="white"
                bgColor="teal.400"
                leftIcon={<RiSearchLine />}
                height="48px"
              >
                CEP
                </Button>
            </Flex>
            <Input
              width="550px"
              id="id_professional_address"
              name="professional_address"
              type="text"
              borderColor="teal.400"
              label="* Logradouro (rua, avenida, etc...):"
            />
            <Input
              id="id_professional_number"
              name="house_number"
              type="text"
              borderColor="teal.400"
              label="* número:"
            />
          </Grid>
          <Grid templateColumns="1fr 1fr 1fr" columnGap="2">
            <Input
              id="id_additional_professional_address"
              name="additional_professional_address"
              type="text"
              borderColor="teal.400"
              label="Complemento:"
            />
            <Input
              id="id_professional_city"
              name="professional_city"
              type="text"
              borderColor="teal.400"
              label="Cidade:"
            />
            <Input
              id="id_professional_state"
              name="professional_state"
              type="text"
              borderColor="teal.400"
              label="Estado (UF):"
            />
          </Grid>
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
              />
              <Input
                label="* e-mail:"
                type="email"
                name="email"
                border="1px solid"
                borderColor="teal.400"
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
          >
            ENVIAR CADASTRO
          </Button>
        </Grid>

      </Flex>
    </Flex>
  )
}
