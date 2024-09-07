import { Text as ChakraText } from "@chakra-ui/react";

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraText fontSize={["xs", "xs", "sm", "md"]}>{children}</ChakraText>
  );
};
export default Text;
