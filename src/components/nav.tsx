import { Box, Button, Flex, Icon, Spacer } from "@chakra-ui/react";
import { FaReceipt } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as RouterLink } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

const Nav = () => {
  const auth = useAuth();
  const logOut = () => {
    auth.logout();
  };

  return (
    <Flex
      color="white"
      p={2}
      px={14}
      bg="blue.400"
      align="center"
      justify="space-between"
      fontWeight={600}
      fontSize="lg"
    >
      <Flex gap={10}>
        <Icon as={FaReceipt} boxSize={8} />

        <Box
          as={RouterLink}
          to="/"
          _hover={{ color: "blue.100" }}
          className="[&.active]:font-bold"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Dashboard
        </Box>
        <Spacer />
        <Box
          as={RouterLink}
          to="/new-invoice"
          _hover={{ color: "blue.100" }}
          className="[&.active]:font-bold"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          New Invoice
        </Box>
        <Spacer />
        <Box
          as={RouterLink}
          to="/subscriptions"
          _hover={{ color: "blue.100" }}
          className="[&.active]:font-bold"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Subscriptions
        </Box>
        <Spacer />
        <Box
          as={RouterLink}
          to="/settings"
          _hover={{ color: "blue.100" }}
          className="[&.active]:font-bold"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Settings
        </Box>
      </Flex>
      <Button onClick={logOut}>Sing Out</Button>

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Nav;
