import React from "react";
import {
  Button,
  Flex,
  Box,
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
import Card from "./primitives/card";
import Text from "./primitives/text";

export const SettingsStatusCard = () => {
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");
  const navigate = useNavigate();

  return (
    <Card>
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        <Heading
          display={"flex"}
          alignItems={"center"}
          as="h3"
          size="md"
          color={"green.400"}
        >
          <Icon as={FaCog} mr={2} />
          Plan & QuickBooks Connection
        </Heading>

        <Text>
          Here you can manage your subscription plan and QuickBooks connection.
          You can upgrade or downgrade your plan, and connect or disconnect from
          QuickBooks.
        </Text>

        <Box display="flex" alignItems="center">
          <Icon as={FaMoneyCheckAlt} mr={2} />
          <Text>Subscription Plan</Text>
        </Box>

        <Flex alignItems={"center"} gap={6}>
          <Button
            colorScheme="green"
            onClick={() => navigate({ to: "/subscriptions" })}
            _hover={{
              backgroundColor: "green.500",
              cursor: "default",
            }}
          >
            Basic Plan
          </Button>
          <Link
            display={"flex"}
            alignItems={"center"}
            color={"green.400"}
            fontWeight={"bold"}
            onClick={() => navigate({ to: "/subscriptions" })}
          >
            <Icon as={FaExchangeAlt} mr={2} />
            Change Plan
          </Link>
        </Flex>

        <Box display="flex" alignItems="center">
          <Icon as={FaCloud} mr={2} />
          <Text>QuickBooks Connection Status</Text>
        </Box>

        <Flex alignItems={"center"} gap={6}>
          <Button
            _hover={{
              backgroundColor: "green.500",
              cursor: "default",
            }}
            colorScheme="green"
          >
            Connected
          </Button>
          <Link
            display={"flex"}
            alignItems={"center"}
            color={"green.400"}
            fontWeight={"bold"}
          >
            <Icon as={FaPlug} mr={2} />
            Disconnect from QuickBooks
          </Link>
        </Flex>
      </Box>
    </Card>
  );
};
