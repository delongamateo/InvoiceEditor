import React from "react";
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Select,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaBuilding, FaUser } from "react-icons/fa";

// Define the schema using zod
const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  taxNumber: z.string().min(1, "Tax Number is required"),
  currencyType: z.string().min(1, "Currency Type is required"),
});

const SimpleForm = () => {
  const textColor2 = useColorModeValue("#4A5567", "#A0AEBF");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      taxNumber: "",
      currencyType: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Flex direction="row" justifyContent={"center"} gap={20} mt={20}>
      <Box
        color={textColor2}
        backdropFilter="blur(10px)"
        borderRadius="lg"
        p={8}
        width="full"
        boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
        fontFamily="Arial"
        border="1px"
        borderBottom="4px"
        borderColor="blue.400"
        transition="all 0.3s ease-in-out"
        maxWidth={700}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Heading as="h3" size="md" color={"blue.400"}>
              <Icon as={FaBuilding} mr={2} />
              Company Info
            </Heading>
            <Flex direction="column">
              <FormLabel>Company Name</FormLabel>
              <Input {...register("companyName")} />
              {errors.companyName && (
                <FormErrorMessage>
                  {errors.companyName.message}
                </FormErrorMessage>
              )}
            </Flex>

            <Flex direction="column">
              <FormLabel>Tax Number</FormLabel>
              <Input {...register("taxNumber")} />
              {errors.taxNumber && (
                <FormErrorMessage>{errors.taxNumber.message}</FormErrorMessage>
              )}
            </Flex>

            <Flex direction="column">
              <FormLabel>Currency Type</FormLabel>
              <Select {...register("currencyType")}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                {/* Add more options as needed */}
              </Select>
              {errors.currencyType && (
                <FormErrorMessage>
                  {errors.currencyType.message}
                </FormErrorMessage>
              )}
            </Flex>

            <Heading as="h3" size="md" color={"blue.400"}>
              <Icon as={FaUser} mr={2} />
              Personal Info
            </Heading>
            <Flex direction="column">
              <FormLabel>First Name</FormLabel>
              <Input {...register("firstName")} />
              {errors.firstName && (
                <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>
              )}
            </Flex>

            <Flex direction="column">
              <FormLabel>Last Name</FormLabel>
              <Input {...register("lastName")} />
              {errors.lastName && (
                <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
              )}
            </Flex>

            <Flex direction="column">
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} type="email" />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </Flex>

            <Button type="submit" colorScheme="blue">
              Save
            </Button>
          </Stack>
        </form>
      </Box>

      <Box
        color="blue.400"
        backdropFilter="blur(10px)"
        borderRadius="lg"
        p={6}
        width="full"
        boxShadow="0px 0px 5px 5px rgba(99, 179, 237, 0.1)"
        fontFamily="Arial"
        border="1px"
        borderBottom="4px"
        borderColor="blue.400"
        transition="all 0.3s ease-in-out"
        maxWidth={700}
      >
        <Button type="submit" colorScheme="blue">
          Button 1
        </Button>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Button type="submit" colorScheme="blue">
          Button 2
        </Button>
        <Text>Quisque id eros ut diam mollis vestibulum.</Text>
      </Box>
    </Flex>
  );
};

export default SimpleForm;
