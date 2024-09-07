import { Flex } from "@chakra-ui/react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      backdropFilter="blur(10px)"
      borderRadius="md"
      p={[2, 4]}
      align="center"
      justify="center"
      direction={"column"}
      width="full"
      boxShadow="0px 1px 4px 0px"
      height={"full"}
      border="1px"
      borderColor="#D4D7DC"
      gap={[2, 2, 4]}
    >
      {children}
    </Flex>
  );
};

export default Card;
