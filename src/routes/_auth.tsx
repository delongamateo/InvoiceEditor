import * as React from "react";
import {
  createFileRoute,
  Link as RouterLink,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (context?.auth?.user) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  const router = useRouter();

  const auth = useAuth();

  return (
    <>
      <Flex
        color="white"
        p={4}
        pl={14}
        pr={14}
        bg="blue.400"
        align="center"
        justify="space-between"
        fontFamily="Arial"
        fontWeight={600}
        fontSize="lg"
      >
        <Flex gap={10}>
          <Box
            as={RouterLink}
            to="/"
            _hover={{ color: "blue.100" }}
            className="[&.active]:font-bold"
          >
            Dashboard
          </Box>
          <Spacer />
          <Box
            as={RouterLink}
            to="/new-invoice"
            _hover={{ color: "blue.100" }}
            className="[&.active]:font-bold"
          >
            New Invoice
          </Box>
          <Spacer />
          <Box
            as={RouterLink}
            to="/subscriptions"
            _hover={{ color: "blue.100" }}
            className="[&.active]:font-bold"
          >
            Subscriptions
          </Box>
          <Spacer />
          <Box
            as={RouterLink}
            to="/settings"
            _hover={{ color: "blue.100" }}
            className="[&.active]:font-bold"
          >
            Settings
          </Box>
        </Flex>

        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <hr />
      <Outlet />
    </>
  );
}
