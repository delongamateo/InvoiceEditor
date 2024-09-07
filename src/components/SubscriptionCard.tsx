import {
  Flex,
  Box,
  Icon,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import Card from "./primitives/card";
import Text from "./primitives/text";
import Heading from "./primitives/heading";

const yearlyPlans = [
  {
    title: "Premium Annual Pass",
    price: "200$Month",
    invoiceLimit: "100",
    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Elite Yearly Access",
    price: "300$Month",
    invoiceLimit: "300",

    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Ultimate Year Package",
    price: "400$Month",
    invoiceLimit: "1000",

    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Gold Membership Plan",
    price: "500$Month",
    invoiceLimit: "Unlimited",
    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
];

const monthlyPlans = [
  {
    title: "Premium Montly Pass",
    price: "20$Month",
    invoiceLimit: "100",
    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Elite Montly Access",
    price: "30$Month",
    invoiceLimit: "300",

    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Ultimate Month Package",
    price: "40$Month",
    invoiceLimit: "1000",

    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
  {
    title: "Gold Month Plan",
    price: "50$Month",
    invoiceLimit: "Unlimited",
    benefits: [
      "Full QuickBooks Integration",
      "Add QR Codes to Invoices",
      "Online Support",
      "Scan2pay QR Links (Like PayPal)",
      "Custom Branding",
    ],
  },
];

const SubscriptionCard = ({ planType }: { planType: string }) => {
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");

  return (
    <Flex
      width={"full"}
      gap={[2, 2, 4]}
      alignItems={"center"}
      justifyContent={"space-around"}
      direction={["column", "column", "row"]}
    >
      {(planType === "monthly" ? monthlyPlans : yearlyPlans)
        .slice(0, 2)
        .map((plan, index) => (
          <Card key={index}>
            <Flex direction={"column"} gap={[2, 2, 4]}>
              <Heading>
                {plan.title.split(" ").map((word, index) => (
                  <Fragment key={index}>
                    {word}
                    {index === 1 && " "}
                    {index !== 1 && " "}
                  </Fragment>
                ))}
              </Heading>

              <Text>{plan.price}</Text>
              <Text>Generate up to {plan.invoiceLimit} invoices</Text>
              <List spacing={3}>
                {plan.benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <Icon as={FaCheck} color="green.500" mr={2} />
                    {benefit}
                  </ListItem>
                ))}
              </List>
              <Button leftIcon={<FaArrowRight />} colorScheme="blue">
                Choose This Plan
              </Button>
            </Flex>
          </Card>
        ))}
    </Flex>
  );
};

export default SubscriptionCard;
