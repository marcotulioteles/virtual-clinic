import { Flex, Grid, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { RiYoutubeLine,  RiInstagramLine, RiFacebookLine, RiTwitterLine} from 'react-icons/ri'

export function Footer() {
  return (
    <Stack
      width="100vw"
      height="fit-content"
      bgGradient="linear(to-r, teal.400, blueGradient.600)"
      direction="column"
      align="center"
      justify="center"
      spacing="0"
    >
      <Grid
        marginY="32px"
        width={{ xl:"1200px" }}
        height={{ xl: "160px" }}
        templateColumns={{ xl: "repeat(3, auto) 1fr" }}
        columnGap={32}
      >
        <Flex
          direction="column"
          align={{base:"center", xl:"flex-start"}}
          color="white"
          minHeight={{ xl:"100px" }}
        >
          <Text as="h1" fontWeight="bold" marginBottom="8px" paddingTop={{ base:"32px", xl:"0" }}>CONTEÚDO</Text>
          <Link>Top serviços</Link>
          <Link>Empresas</Link>
          <Link>Profissionais</Link>
          <Link>Tags</Link>
        </Flex>
        <Flex
          flexDirection="column"
          align={{base:"center", xl:"flex-start"}}
          color="white"
          minHeight={100}
        >
          <Text as="h1" fontWeight="bold" marginBottom="8px" paddingTop={{ base:"32px", xl:"0" }}>AJUDA</Text>
          <Link>Suporte</Link>
          <Link>Perguntas Frequentes</Link>
        </Flex>
        <Flex
          flexDirection="column"
          align={{base:"center", xl:"flex-start"}}
          color="white"
          minHeight={100}
        >
          <Text as="h1" fontWeight="bold" marginBottom="8px" paddingTop={{ base:"32px", xl:"0" }}>EMPRESA</Text>
          <Link>Sobre nós</Link>
          <Link>Fale conosco</Link>
          <Link>Nossa licença</Link>
          <Link>Tags</Link>
        </Flex>

        <Flex
          color="white"
          justifySelf={{xl: "end"}}
          direction="column"
          align={{base:"center", xl:"right"}}
        >
          <Text
            fontWeight="bold"
            marginBottom="8px"
            marginTop={{ base: "32px", xl:"0" }}
            textAlign={{base:"center", xl: "right"}}
            width="100%"
          >
            SOCIAL MEDIA
          </Text>
          <Stack spacing="8px" direction="row" >
            <Link><RiYoutubeLine size={32}/></Link>
            <Link><RiInstagramLine size={32}/></Link>
            <Link><RiFacebookLine size={32}/></Link>
            <Link><RiTwitterLine size={32}/></Link>
          </Stack>
        </Flex>
      </Grid>

      <Flex
        width={{xl:"1200px"}}
        height={{xl:"96px"}}
        align="center"
        direction={{ base:"column", xl:"row" }}
        borderTop="1px solid"
        borderColor="white"
        paddingY={{base:"24px", xl:"0"}}
      >
        <Text fontSize="1.75rem" fontWeight="600" color="white">NAUTILLUS</Text>
        <Text fontSize="0.85rem"color="white" marginLeft={{base:"0", xl:"8px"}}>Copyright © 2021. All rights reserved.</Text>
      </Flex>
    </Stack>
  )
}