import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinksComponentProps {
  href: string;
  linkTitle: string;
  iconName: ElementType
}

export function NavLinkComponent( { href, linkTitle, iconName }:NavLinksComponentProps ) {
  return (
    <Link href={href}>
      <Flex as="a" display="flex" align="center" justify="center">
        <Text fontWeight="600">{linkTitle}</Text>
        <Icon as={iconName} w={26} h={26} marginLeft={2} />
      </Flex>
    </Link>
  )
}