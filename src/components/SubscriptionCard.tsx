import {
  Flex,
  Text,
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
      gap={4}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      {(planType === "monthly" ? monthlyPlans : yearlyPlans).map(
        (plan, index) => (
          <Stack
            key={index}
            display={"flex"}
            flexDirection={"column"}
            color="blue.400"
            borderColor="blue.400"
            border="1px"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            alignItems={"center"}
            width="20%"
            fontFamily={"Arial"}
            boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
            p={4}
            gap={2}
          >
            <Box width={"full"}>
              <Text fontWeight={900} fontSize={"2xl"} textAlign={"center"}>
                {plan.title.split(" ").map((word, index) => (
                  <Fragment key={index}>
                    {word}
                    {index === 1 && <br />}
                    {index !== 1 && " "}
                  </Fragment>
                ))}
              </Text>
            </Box>
            <Text fontSize={"xl"} color={textColor2}>
              {plan.price}
            </Text>
            <Text color={textColor2}>
              Generate up to {plan.invoiceLimit} invoices
            </Text>
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
          </Stack>
        )
      )}
    </Flex>
  );
};

export default SubscriptionCard;
