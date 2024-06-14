import {
  Flex,
  Stack,
  useColorModeValue,
  Heading,
  Text,
  Progress,
  Box,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";

import { FaCalendarAlt, FaQrcode, FaCheck } from "react-icons/fa";

export const InfoCards = () => {
  const textColor = useColorModeValue("blue.400", "blue.400");
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");
  const navigate = useNavigate();

  return (
    <Stack direction="column" gap={8} flex="1">
      <Flex
        color={textColor}
        backdropFilter="blur(10px)"
        borderRadius="lg"
        p={6}
        align="center"
        justify="center"
        width="full"
        boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
        fontFamily="Arial"
        border="1px"
        borderBottom="4px"
        borderColor="blue.400"
        transition="all 0.3s ease-in-out"
      >
        <Stack alignItems={"center"} textAlign={"center"} spacing={6}>
          <Box display="flex" alignItems="center" gap={4}>
            <Icon as={FaQrcode} w={8} h={8} mr={2} />
            <Heading>Total QR Invoices Created</Heading>
          </Box>
          <Text color={textColor2} fontSize="lg" fontFamily="Arial">
            The total number of QR invoices you have created is displayed below.
          </Text>
          <Heading color="blue.400">23</Heading>

          <Text color={textColor2} fontSize="lg" fontFamily="Arial">
            Curret Plan: Basic Plan
          </Text>
          <Button
            colorScheme="blue"
            onClick={() => navigate({ to: "/subscriptions" })}
          >
            Change Your Plan
          </Button>
        </Stack>
      </Flex>
      <Flex
        color="blue.400"
        backdropFilter="blur(10px)"
        borderRadius="lg"
        p={6}
        align="center"
        justify="center"
        width="full"
        boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
        fontFamily="Arial"
        border="1px"
        borderBottom="4px"
        borderColor="blue.400"
        transition="all 0.3s ease-in-out"
      >
        <Stack alignItems={"center"} textAlign={"center"} spacing={8}>
          <Box display="flex" alignItems="center" gap={4}>
            <Icon as={FaCalendarAlt} w={8} h={8} mr={2} />
            <Heading>Invoices Created This Month</Heading>
          </Box>
          <Text color={textColor2} fontSize="lg" fontFamily="Arial">
            You have created 3 out of your 10 invoice limit for this month.
          </Text>
          <Heading color="blue.400">3/10</Heading>
          <Progress
            hasStripe
            value={30}
            w={"full"}
            borderRadius={"xl"}
            colorScheme="blue"
            size="lg"
            boxShadow="0px 0px 10px 5px rgba(99, 179, 237, 0.3)"
          />
        </Stack>
      </Flex>
    </Stack>
  );
};
