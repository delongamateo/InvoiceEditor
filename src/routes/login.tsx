import { Button, Center, Flex } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { useLoginQuery } from "../api";
import { useEffect } from "react";

const Login = () => {
  const auth = useAuth();
  const { refetch } = useLoginQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate({ to: "/" });
    }
  }, [auth.user, navigate]);

  return (
    <Center p={8}>
      <Flex
        direction="column"
        align="center"
        justify={"center"}
        borderRadius={4}
        backgroundColor={"gray.400"}
        w={"500px"}
        h={"500px"}
        gap={8}
      >
        <p>Sign in with Quickbooks account to use app</p>
        <Button
          bg={"#0177C5"}
          onClick={() =>
            refetch().then((res) => (window.location.href = res.data))
          }
        >
          Sign in with Intuit
        </Button>
      </Flex>
    </Center>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
