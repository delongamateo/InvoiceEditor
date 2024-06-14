import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const ToggleButton = ({
  planType,
  setPlanType,
}: {
  planType: string;
  setPlanType: (type: string) => void;
}) => {
  return (
    <FormControl display="flex" alignItems="center" justifyContent={"center"}>
      <FormLabel mb="0" mr={4} fontSize={"xl"}>
        Monthly Plans
      </FormLabel>
      <Switch
        size="lg"
        isChecked={planType === "yearly"}
        onChange={() =>
          setPlanType(planType === "monthly" ? "yearly" : "monthly")
        }
      />
      <FormLabel mb="0" ml={4} fontSize={"xl"}>
        Yearly Plans
      </FormLabel>
    </FormControl>
  );
};

export default ToggleButton;
