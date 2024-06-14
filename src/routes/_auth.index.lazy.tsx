import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../Test";
import { App } from "../App";
import Dashboard from "../screens/Dashboard";
import { Flex } from "@chakra-ui/react";

export const Route = createLazyFileRoute("/_auth/")({
  component: Index,
});

function Index() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      width={"full"}
    >
      <Dashboard />
    </Flex>
  );
}
