import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
  hover,
}: {
  children: ReactNode;
  label: string;
  href: string;
  hover: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: hover,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg="blackAlpha.900"
      color={"white"}
      fontFamily="'Catamaran', sans-serif"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        pt={8}
        pb={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Box
          fontWeight="bold"
          fontSize={["2xl"]}
          mb="-2"
          color="rgba(0, 233, 223, 1)"
        >
          CryExo
        </Box>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 CryExo Global</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/home"}
              hover="rgba(0, 233, 223, 1)"
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/"}
              hover="rgba(0, 233, 223, 1)"
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/"}
              hover="rgba(0, 233, 223, 1)"
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
