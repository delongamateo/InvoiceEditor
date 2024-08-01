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
import { Button, Flex, Spacer, Box, Icon, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaFileInvoice, FaReceipt } from "react-icons/fa";
import Footer from "../components/footer";
import Nav from "../components/nav";

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
  return (
    <Stack h={"full"}>
      <Nav />
      <Box mx={6} h={"full"} py={2}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
}
