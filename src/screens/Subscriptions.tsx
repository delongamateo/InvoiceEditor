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
      pt={12}
      gap={16}
    >
      <ToggleButton planType={planType} setPlanType={setPlanType} />
      <SubscriptionCard planType={planType} />
    </Flex>
  );
};

export default Subscriptions;
