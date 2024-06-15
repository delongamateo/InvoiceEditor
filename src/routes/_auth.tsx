import * as React from "react";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { Button, Flex, Spacer } from "@chakra-ui/react";
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
          <Link to="/" className="[&.active]:font-bold">
            Dashboard
          </Link>
          <Spacer />
          <Link to="/new-invoice" className="[&.active]:font-bold">
            New Invoice
          </Link>
          <Spacer />
          <Link to="/subscriptions" className="[&.active]:font-bold">
            Subscriptions
          </Link>
          <Spacer />
          <Link to="/settings" className="[&.active]:font-bold">
            Settings
          </Link>
        </Flex>
        <Button onClick={logOut}>Sing Out</Button>

        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <hr />
      <Outlet />
    </>
  );
}
