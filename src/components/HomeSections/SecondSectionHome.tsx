import { Flex, Image } from "@chakra-ui/react";

export function SecondSectionHome() {
  return (
    <Flex
      width="100vw"
      height={{ base: "fit-content", xl: "600px" }}
      background="teal.400"
      justify="center"
      align="center"
    >
      <Flex
        width={1200}
        height={600}
        position="relative"
        align="center"
        justify={{ base:"center", xl:"flex-end" }}
      >
        <Image
          display={{ base:"none", xl:"block" }}
          src="/images/doctor.png"
          sizes="443.3px 720px"
          position="absolute"
          bottom="0"
          left="0"
        />
        <Image src="/images/roadmap.png" objectFit="contain" />
      </Flex>
    </Flex>
  )
}