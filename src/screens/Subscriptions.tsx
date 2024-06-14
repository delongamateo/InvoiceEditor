import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import SubscriptionCard from "../components/SubscriptionCard";

const Subscriptions = () => {
  const [planType, setPlanType] = useState("monthly");

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"full"}
      gap={16}
    >
      <SubscriptionCard planType={planType} />
      <ToggleButton planType={planType} setPlanType={setPlanType} />
    </Flex>
  );
};

export default Subscriptions;
