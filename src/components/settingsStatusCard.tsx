import React from "react";
import {
  Button,
  Flex,
  Box,
  Text,
  useColorModeValue,
  Heading,
  Link,
  Icon,
} from "@chakra-ui/react";

import {
  FaCloud,
  FaCog,
  FaExchangeAlt,
  FaMoneyCheckAlt,
  FaPlug,
  FaRegCreditCard,
} from "react-icons/fa";
import { useNavigate } from "@tanstack/react-router";

export const SettingsStatusCard = () => {
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      color="blue.400"
      backdropFilter="blur(10px)"
      borderRadius="lg"
      p={8}
      width="full"
      boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
      fontFamily="Arial"
      border="1px"
      borderBottom="4px"
      borderColor="blue.400"
      transition="all 0.3s ease-in-out"
      maxWidth={700}
      gap={8}
      height={"fit-content"}
    >
      <Heading
        display={"flex"}
        alignItems={"center"}
        as="h3"
        size="md"
        color={"blue.400"}
      >
        <Icon as={FaCog} mr={2} />
        Plan & QuickBooks Connection
      </Heading>

      <Text color={textColor2}>
        Here you can manage your subscription plan and QuickBooks connection.
        You can upgrade or downgrade your plan, and connect or disconnect from
        QuickBooks.
      </Text>

      <Box display="flex" alignItems="center">
        <Icon as={FaMoneyCheckAlt} mr={2} />
        <Text color={textColor2}>Subscription Plan</Text>
      </Box>

      <Flex alignItems={"center"} gap={6}>
        <Button
          colorScheme="blue"
          onClick={() => navigate({ to: "/subscriptions" })}
          _hover={{
            backgroundColor: "blue.500",
            cursor: "default",
          }}
        >
          Basic Plan
        </Button>
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"blue.400"}
          fontWeight={"bold"}
          onClick={() => navigate({ to: "/subscriptions" })}
        >
          <Icon as={FaExchangeAlt} mr={2} />
          Change Plan
        </Link>
      </Flex>

      <Box display="flex" alignItems="center">
        <Icon as={FaCloud} mr={2} />
        <Text color={textColor2}>QuickBooks Connection Status</Text>
      </Box>

      <Flex alignItems={"center"} gap={6}>
        <Button
          _hover={{
            backgroundColor: "blue.500",
            cursor: "default",
          }}
          colorScheme="blue"
        >
          Connected
        </Button>
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"blue.400"}
          fontWeight={"bold"}
        >
          <Icon as={FaPlug} mr={2} />
          Disconnect from QuickBooks
        </Link>
      </Flex>
    </Box>
  );
};
