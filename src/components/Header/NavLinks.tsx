import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiCalendarLine, RiLoginBoxLine, RiServiceLine } from "react-icons/ri";
import { NavLinkComponent } from "./NavLinkComponent";

export function NavLinks() {
  return (
    <>
      <NavLinkComponent href="/" iconName={RiCalendarLine} linkTitle="agende sua consulta"/>
      <NavLinkComponent href="/" iconName={RiServiceLine} linkTitle="produtos e serviços"/>
      <NavLinkComponent href="/login" iconName={RiLoginBoxLine} linkTitle="faça seu login"/>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="/register">
          <Button variant="solid" color="teal.400" borderRadius={48} boxShadow="xl">
            cadastre-se
          </Button>
        </Link>
      </motion.div>
    </>
  )
}