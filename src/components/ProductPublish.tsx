import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ProductPublishProps {
  description: string;
  price: string
}

export function ProductPublish( { description, price }: ProductPublishProps ) {
  return (
    <Flex
      as="a"
      placeSelf="center"
      display="flex"
      flexDirection="column"
      width="150px"
      color="white"
    >
      <motion.div whileHover={{ scale: 1.2 }}>
        <Image src="/images/oximetro.png" height="150px" objectFit="contain" />
        <Text
          marginTop="12px"
          fontSize="0.85rem"
          fontWeight="600"
          textAlign="center"
        >
          {description}
        </Text>
        <Text
          marginTop="12px"
          fontSize="2rem"
          fontWeight="600"
          textAlign="center"
        >
          {`R$ ${price}`}
        </Text>
      </motion.div>
    </Flex>
  )
}