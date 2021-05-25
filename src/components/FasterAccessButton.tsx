import { Button, ButtonProps, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface FasterAccessButtonProps extends ButtonProps {
  buttonName: string;
  iconFileName: string;
}

export function FasterAccessButton( { buttonName, iconFileName }: FasterAccessButtonProps ) {
  return (
    <Flex placeSelf="center">
      <motion.div whileHover={{ scale: 1.2 }}>
        <Button
          as="a"
          colorScheme="teal"
          display="flex"
          flexDirection="column"
          width={132}
          height={132}
          variant="outline"
          placeSelf="center"
          background="white"
          boxShadow="xl"
        >
          <Image src={`/images/${iconFileName}`} height="48px" marginBottom="12px" />
          {buttonName}
        </Button>
      </motion.div>
    </Flex>
  )
}