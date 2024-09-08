import {
  Flex,
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
import Heading from "../components/primitives/heading";
import Card from "../components/primitives/card";
import Text from "../components/primitives/text";

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
  const textColor = useColorModeValue("#2ca01c", "#2ca01c");
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]}
      gap={6}
      height={"full"}
    >
      <Box gridRow={["span 1", "span 1", "span 2"]}>
        <Card>
          <Flex
            display="flex"
            alignItems="center"
            p={4}
            gap={4}
            color={textColor}
          >
            <Icon as={FaFileInvoice} w={8} h={8} mr={2} />
            <Heading>Invoices Created This Month</Heading>
          </Flex>
          <Table data={data} columns={columns} />
        </Card>
      </Box>
      <Box gridRow={["2", "2", "1"]} gridColumn={["1", "1", "2"]}>
        <Card>
          <Flex
            direction={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={[2, 2, 4]}
            color={textColor}
          >
            <Box display="flex" alignItems="center" gap={4} color={textColor}>
              <Icon as={FaQrcode} w={8} h={8} />
              <Heading>Total QR Invoices Created</Heading>
            </Box>
            <Text>
              The total number of QR invoices you have created is displayed
              below.
            </Text>
            <Heading>23</Heading>

            <Text>Curret Plan: Basic Plan</Text>
            <Button
              colorScheme=""
              onClick={() => navigate({ to: "/subscriptions" })}
            >
              Change Your Plan
            </Button>
          </Flex>
        </Card>
      </Box>
      <Box gridRow={["3", "3", "2"]} gridColumn={["1", "1", "2"]}>
        <Card>
          <Flex
            direction={"column"}
            alignItems={"center"}
            textAlign={"center"}
            color={textColor}
            gap={[2, 2, 4]}
          >
            <Box display="flex" alignItems="center" gap={[2, 2, 4]}>
              <Icon as={FaCalendarAlt} w={8} h={8} />
              <Heading>Invoices Created This Month</Heading>
            </Box>
            <Text>
              You have created 3 out of your 10 invoice limit for this month.
            </Text>
            <Heading>3/10</Heading>
            <Progress
              hasStripe
              value={30}
              w={"full"}
              borderRadius={"xl"}
              colorScheme="green"
              size="lg"
              boxShadow="0px 0px 10px 5px rgba(99, 179, 237, 0.3)"
            />
          </Flex>
        </Card>
      </Box>
    </Grid>
  );
};

export default Dashboard;
