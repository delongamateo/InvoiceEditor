import { Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import SubscriptionCard from "../components/SubscriptionCard";

import { FaRegCreditCard } from "react-icons/fa";

const Subscriptions = () => {
  const [planType, setPlanType] = useState("monthly");
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"full"}
      gap={12}
      fontFamily={"Arial"}
    >
      <Flex
        alignItems="center"
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Icon color={"blue.400"} as={FaRegCreditCard} boxSize={8} />
      </Flex>

      <ToggleButton planType={planType} setPlanType={setPlanType} />
      <SubscriptionCard planType={planType} />
      <Text textAlign="center" color={textColor2} maxWidth="xl">
        Choose a plan that fits your needs. You can switch between monthly and
        yearly plans at any time.
      </Text>
    </Flex>
  );
};

export default Subscriptions;
