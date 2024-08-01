import { Flex, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      color="white"
      px={14}
      py={2}
      bg="blue.400"
      align="center"
      justify="space-between"
      fontSize="sm"
      width="full"
    >
      <Text mb={{ base: 4, md: 0 }}>
        © {new Date().getFullYear()} Invoice Editor
      </Text>
      <Spacer />
      <Text mb={{ base: 4, md: 0 }}>
        Contact: info@example.com | +1 (123) 456-7890
      </Text>
      <Spacer />
      <Flex>
        <Link
          href="https://www.facebook.com"
          isExternal
          mx={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={FaFacebook} w={6} h={6} />
        </Link>
        <Link
          href="https://www.twitter.com"
          isExternal
          mx={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={FaTwitter} w={6} h={6} />
        </Link>
        <Link
          href="https://www.instagram.com"
          isExternal
          mx={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={FaInstagram} w={6} h={6} />
        </Link>
        <Link
          href="https://www.linkedin.com"
          isExternal
          mx={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon as={FaLinkedin} w={6} h={6} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
