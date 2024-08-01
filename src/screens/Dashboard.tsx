import {
  Flex,
  Heading,
  Text,
  Box,
  Icon,
  Stack,
  Button,
  Grid,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Table from "../components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { FaCalendarAlt, FaFileInvoice, FaQrcode } from "react-icons/fa";
import { useNavigate } from "@tanstack/react-router";

type Invoice = {
  name: string;
  creationDate: string;
  actions: string;
};

const invoices: Invoice[] = [
  {
    name: "Invoice 1",
    creationDate: "2022-01-01",
    actions: "View",
  },
  {
    name: "Invoice 2",
    creationDate: "2022-01-02",
    actions: "View",
  },
  {
    name: "Invoice 3",
    creationDate: "2022-01-03",
    actions: "View",
  },
];

const columnHelper = createColumnHelper<Invoice>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (row) => <Text>{row.getValue()}</Text>,
  }),
  columnHelper.accessor("creationDate", {
    header: "Creation Date",
    cell: (row) => <Text>{row.getValue()}</Text>,
  }),
  columnHelper.accessor("actions", {
    header: "Actions",
    cell: (row) => <Text>{row.getValue()}</Text>,
  }),
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(invoices);
  const textColor = useColorModeValue("blue.400", "blue.400");
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={6}
      height={"full"}
    >
      <Box gridRow="span 2">
        <Stack
          color="blue.400"
          borderColor="blue.400"
          height={"full"}
          border="1px"
          borderBottom="4px"
          backdropFilter="blur(10px)"
          p={4}
          width="full"
          flex="1"
          borderRadius="lg"
          gap={8}
          boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
        >
          <Box display="flex" alignItems="center" p={4} gap={4}>
            <Icon as={FaFileInvoice} w={8} h={8} mr={2} />
            <Heading> Invoices Created This Month </Heading>
          </Box>
          <Table data={data} columns={columns} />
        </Stack>
      </Box>
      <Box gridRow="1" gridColumn="2">
        <Flex
          color={textColor}
          backdropFilter="blur(10px)"
          borderRadius="lg"
          p={6}
          align="center"
          justify="center"
          width="full"
          boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
          height={"full"}
          border="1px"
          borderBottom="4px"
          borderColor="blue.400"
        >
          <Stack alignItems={"center"} textAlign={"center"}>
            <Box display="flex" alignItems="center" gap={4}>
              <Icon as={FaQrcode} w={8} h={8} />
              <Heading>Total QR Invoices Created</Heading>
            </Box>
            <Text color={textColor2} fontSize="lg">
              The total number of QR invoices you have created is displayed
              below.
            </Text>
            <Heading color="blue.400">23</Heading>

            <Text color={textColor2} fontSize="lg">
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
      </Box>
      <Box gridRow="2" gridColumn="2">
        <Flex
          color="blue.400"
          backdropFilter="blur(10px)"
          borderRadius="lg"
          p={6}
          align="center"
          justify="center"
          width="full"
          boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
          height={"full"}
          border="1px"
          borderBottom="4px"
          borderColor="blue.400"
          transition="all 0.3s ease-in-out"
        >
          <Stack alignItems={"center"} textAlign={"center"}>
            <Box display="flex" alignItems="center" gap={4}>
              <Icon as={FaCalendarAlt} w={8} h={8} />
              <Heading>Invoices Created This Month</Heading>
            </Box>
            <Text color={textColor2} fontSize="lg">
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
      </Box>
    </Grid>
  );
};

export default Dashboard;
