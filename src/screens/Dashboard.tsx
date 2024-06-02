import {
  Center,
  Flex,
  Stack,
  useColorModeValue,
  Heading,
  Text,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import Table from "../components/Table";
import { createColumnHelper } from "@tanstack/react-table";

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
  const [data, setData] = React.useState(invoices);
  const bgColor = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.4)");
  const textColor = useColorModeValue("black", "white");

  return (
    <Stack p={12} gap={8}>
      <Flex gap={8} alignItems="stretch">
        <Flex
          bg={bgColor}
          color={textColor}
          backdropFilter="blur(10px)"
          borderRadius="md"
          p={4}
          
          justify="center"
          width="full"
          minHeight="full"
          boxShadow="xl"
        >
          <Stack alignItems={"center"} textAlign={"center"}>
            <Heading>Total Invoices Created</Heading>
            <Heading>0</Heading>
          </Stack>
        </Flex>
        <Flex
          bg={bgColor}
          color={textColor}
          backdropFilter="blur(10px)"
          borderRadius="md"
          p={4}
          align="center"
          justify="center"
          width="full"
          minHeight="full"
          boxShadow="xl"
        >
          <Stack alignItems={"center"} textAlign={"center"}>
            <Heading>Invoices Created This Month</Heading>
            <Heading>3/10</Heading>

            <Progress hasStripe value={30} w={"full"} borderRadius={"xl"} />
          </Stack>
        </Flex>
      </Flex>
      <Flex
        bg={bgColor}
        color={textColor}
        backdropFilter="blur(10px)"
        borderRadius="md"
        p={4}
        width="full"
        height="full"
        boxShadow="xl"
      >
        <Table data={data} columns={columns} />
      </Flex>
    </Stack>
  );
};

export default Dashboard;
