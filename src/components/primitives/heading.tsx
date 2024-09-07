import { Heading as ChakraHeading } from "@chakra-ui/react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraHeading fontSize={["sm", "sm", "md", "lg"]} noOfLines={1}>
      {children}
    </ChakraHeading>
  );
};
export default Heading;
