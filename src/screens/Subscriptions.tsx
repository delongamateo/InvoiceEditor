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
      direction={"column"}
      align={"center"}
      justify={"center"}
      width={"70%"}
      margin={"auto"}
      height={"full"}
      gap={[2, 2, 12]}
      pt={[2, 2, 4]}
    >
      <ToggleButton planType={planType} setPlanType={setPlanType} />
      <SubscriptionCard planType={planType} />
      <Text
        textAlign="center"
        color={textColor2}
        maxWidth="xl"
        display={"flex"}
        alignItems={"start"}
      >
        <Icon color={"green"} as={FaRegCreditCard} boxSize={6} />
        Choose a plan that fits your needs. You can switch between monthly and
        yearly plans at any time.
      </Text>
    </Flex>
  );
};

export default Subscriptions;
