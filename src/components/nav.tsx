import { Box, Button, Flex, Icon, Spacer } from "@chakra-ui/react";
import { FaReceipt } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as RouterLink, useParams } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import Text from "./primitives/text";
import { useState } from "react";

const Nav = () => {
  // const route = useParams({
  //   from: "/_auth",
  // });

  const auth = useAuth();
  const logOut = () => {
    auth.logout();
  };
  const looseParams = useParams({ strict: false });
  console.log(looseParams);

  const [route, setRoute] = useState("/");

  return (
    <Flex
      px={[4, 6, 12, 14]}
      align="bottom"
      justify="space-between"
      fontWeight={600}
      color={"gray.600"}
      fontSize="lg"
      borderBottom={"2px solid"}
      borderBottomColor={"gray.200"}
    >
      <Flex gap={[2, 4, 6, 10]} align={"center"}>
        <Icon as={FaReceipt} boxSize={6} color="green" />
        <Flex
          as={RouterLink}
          to="/"
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setRoute("/")}
          borderBottom={route === "/" ? "4px solid #2ca01c" : "none"}
          fontWeight={route === "/" ? "600" : "400"}
          height={"full"}
          px={4}
        >
          <Text>Dashboard</Text>
        </Flex>
        <Spacer />
        <Flex
          as={RouterLink}
          to="/new-invoice"
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setRoute("new-invoice")}
          borderBottom={route === "new-invoice" ? "4px solid #2ca01c" : "none"}
          fontWeight={route === "new-invoice" ? "600" : "400"}
          height={"full"}
          px={4}
        >
          <Text>New Invoice</Text>
        </Flex>
        <Spacer />
        <Flex
          as={RouterLink}
          to="/subscriptions"
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setRoute("subscriptions")}
          borderBottom={
            route === "subscriptions" ? "4px solid #2ca01c" : "none"
          }
          height={"full"}
          px={4}
          fontWeight={route === "subscriptions" ? "600" : "400"}
        >
          <Text>Subscriptions</Text>
        </Flex>
        <Spacer />
        <Flex
          as={RouterLink}
          to="/settings"
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => setRoute("settings")}
          borderBottom={route === "settings" ? "4px solid #2ca01c" : "none"}
          height={"full"}
          px={4}
          fontWeight={route === "settings" ? "600" : "400"}
        >
          <Text>Settings</Text>
        </Flex>
      </Flex>
      {/* <Button onClick={logOut}>Sing Out</Button> */}

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Nav;
