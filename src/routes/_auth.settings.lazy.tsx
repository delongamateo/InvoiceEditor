import { createLazyFileRoute } from "@tanstack/react-router";
import Settings from "../screens/Settings";
import { Flex } from "@chakra-ui/react";

export const Route = createLazyFileRoute("/_auth/settings")({
  component: About,
});

function About() {
  return (
    <Flex
      p={12}
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      width={"full"}
    >
      <Settings />
    </Flex>
  );
}
