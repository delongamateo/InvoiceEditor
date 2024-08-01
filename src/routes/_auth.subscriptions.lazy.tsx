import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../Test";
import { App } from "../App";
import { Flex } from "@chakra-ui/react";
import Subscriptions from "../screens/Subscriptions";

export const Route = createLazyFileRoute("/_auth/subscriptions")({
  component: Index,
});

function Index() {
  return <Subscriptions />;
}
