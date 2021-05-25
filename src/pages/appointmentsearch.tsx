import { Button, Flex, Grid, Icon, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { api } from "../../services/api";
import { MiniProfessionalCard, MiniProfessionalCardProps } from "../components/MiniProfessionalCard";

export default function AppointmentSearch() {
  const [professionals, setProfessionals] = useState<MiniProfessionalCardProps[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    api.get('http://localhost:3333/professionals').then(response => {
      setProfessionals(response.data)
    })
  }, [])

  return (
    <Flex
      width="100vw"
      height="auto"
      justify="center"
      align="center"
      direction="column"
      bgColor="gray.50"
    >
      <Grid
        width="1200px"
        height="260px"
        templateColumns="1fr 1fr"
        alignItems="center"
        marginBottom="2px solid"
        borderColor="teal.400"
      >
        <Flex direction="column">
          <Text fontWeight="700" fontSize="4.25rem" color="blue.600" lineHeight="4.5rem">Agende agora sua consulta...</Text>
          <Text
            fontWeight="600"
            fontSize="1.625rem"
            color="teal.400"
            marginTop="35px"
          >
            consultas mais buscadas na sua localidade
          </Text>
        </Flex>
        <Flex direction="column">
          <Flex>
            <Button bgColor="teal.400" color="white">
              <Icon as={RiSearchLine} />
            </Button>
            <Input
              placeholder="pesquise um nome aqui"
              name="search"
              type="text"
              id="search"
              bgColor="white"
              border="1px solid"
              borderColor="teal.400"
              marginLeft="4px"
              marginBottom="16px"
              onChange={(event) => {
                setSearch(event.target.value)
              }} 
            />
          </Flex>
          <Text
            color="teal.400"
            fontWeight="600"
          >
            Pesquise sua consulta de forma simples e eficaz. Basta digitar a especialidade ou o nome do médico que deseja.
          </Text>
        </Flex>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap="20px" marginY="36px">
        { professionals.filter((professional) => {
          if (search == "") {
            return professional
          } else if (professional.name.toLowerCase().includes(search.toLowerCase())) {
            return professional
          } else if (professional.especialized_in.toLowerCase().includes(search.toLowerCase())) {
            return professional
          }
        }).map(professional => {
          return(
            <MiniProfessionalCard 
              key={professional.id}
              id={professional.id}
              avatar={professional.avatar}
              description={professional.description}
              especialized_in={professional.especialized_in}
              name={professional.name}
              profession={professional.profession}
              professional_number={professional.professional_number}
            />
          )
        }) }
      </Grid>
    </Flex>
  )
}