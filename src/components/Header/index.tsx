import { Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [click, setClick] = useState(true)

  const handleClick = () => setClick(!click)

  return (
    <>
      <Flex
        as="header"
        w="100%"
        h="20"
        align="center"
        justify="center"
        color="white"
        bgGradient="linear(to-r, teal.400, blueGradient.600)"
        position="relative"
      >
        <Flex as="nav" w="1200px" justify="space-between">
          <Link href="/">
            <Flex
              as="a"
              w="auto"
              h="80px"
              justify="center"
              align="center"
              marginLeft={{ base: "20px", md: "32px", xl: "0" }}
            >
              <Image
                src="/images/virtual-clinic-logo-white.svg"
                width="52px"
              />
              <Text
                fontSize="1.25rem"
                fontWeight="bold"
                marginLeft="12px"
                display={{ base:"none", xl:"inherit" }}
              >
                VIRTUAL CLINIC
              </Text>
            </Flex>
          </Link>

          <Flex
            display={{ base: "flex", xl: "none" }}
            onClick={handleClick}
            align="center"
            marginRight={{ base: "20px", md: "64px", xl: "0" }}
          >
            <Icon as={click ? RiMenuLine : RiCloseLine} fontSize="36px" />
          </Flex>

          <Flex
            display={{ base: `${click ? "none" : "flex" }`, xl:"inline-flex" }}
            w={{ base: "280px", xl: "max-content" }}
            h={{ base: "280px", xl: "auto" }}
            bg={{ base: "white", xl: "none" }}
            color={{ base: "teal.400", xl: "white" }}
            justify="center"
            align="center"
            textAlign="center"
            top={{ base: "80px", xl: "inherit" }}
            right={{ base: "0" }}
            position={{ base: "absolute", xl: "inherit" }}
            boxShadow={{ base: "xl", xl: "none" }}
            zIndex="999"
          >
            <Stack direction={{ base: "column", xl: "row" }} spacing="8" align={{ xl: "center" }}>
              <NavLinks />
            </Stack>
          </Flex>
        </Flex>

      </Flex>
    </>
  )
}