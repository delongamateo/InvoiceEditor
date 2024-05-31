import * as React from "react";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { Flex, Spacer } from "@chakra-ui/react";

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

  const auth = useAuth();

  return (
    <>
      <Flex px={8}>
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
      <hr />
      <Outlet />
    </>
  );
}
