import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../Test";
import { App } from "../App";
import { Flex } from "@chakra-ui/react";
import NewInvoice from "../screens/NewInvoice";

export const Route = createLazyFileRoute("/_auth/new-invoice")({
  component: Index,
});

function Index() {
  return (
    <Flex
      p={12}
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      width={"full"}
    >
      <NewInvoice />
    </Flex>
  );
}
