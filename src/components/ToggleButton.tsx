import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import Text from "./primitives/text";

const ToggleButton = ({
  planType,
  setPlanType,
}: {
  planType: string;
  setPlanType: (type: string) => void;
}) => {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      gap={2}
    >
      <Text>Monthly Plans</Text>
      <Switch
        size={["md", "md", "lg"]}
        isChecked={planType === "yearly"}
        onChange={() =>
          setPlanType(planType === "monthly" ? "yearly" : "monthly")
        }
      />
      <Text>Yearly Plans</Text>
    </FormControl>
  );
};

export default ToggleButton;
