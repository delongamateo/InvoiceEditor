import * as React from "react";
import {
  createFileRoute,
  Link as RouterLink,
  Outlet,
  redirect,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { Button, Flex, Spacer,Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context?.auth?.user) {
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
  const navigate = useNavigate();
  const auth = useAuth();

  const logOut = () => {
    auth.logout();
  };

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
        <Button onClick={logOut}>Sing Out</Button>

        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <hr />
      <Outlet />
    </>
  );
}
