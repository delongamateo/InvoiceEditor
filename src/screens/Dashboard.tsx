import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react";
import React from "react";
import Table from "../components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { FaFileInvoice } from "react-icons/fa";
import { InfoCards } from "../components/infoCards";

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

  return (
    <Flex p={12} gap={8} align="stretch">
      <InfoCards />
      <Flex
        color="blue.400"
        borderColor="blue.400"
        transition="all 0.3s ease-in-out"
        border="1px"
        borderBottom="4px"
        backdropFilter="blur(10px)"
        p={4}
        width="full"
        flex="1"
        alignItems="start"
        borderRadius="lg"
        direction="column"
        gap={8}
        boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
      >
        <Box display="flex" alignItems="center" p={4} gap={4}>
          <Icon as={FaFileInvoice} w={8} h={8} mr={2} />
          <Heading> Invoices Created This Month </Heading>
        </Box>

        <Table data={data} columns={columns} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
