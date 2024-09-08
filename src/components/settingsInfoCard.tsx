import {
  Button,
  Flex,
  FormLabel,
  Input,
  Stack,
  Box,
  useColorModeValue,
  Select,
  Heading,
  Link,
  Icon,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaUsers } from "react-icons/fa";
import Card from "./primitives/card";

const schema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .max(50, "First Name is too long"),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .max(50, "Last Name is too long"),
  companyName: z
    .string()
    .min(1, "Company Name is required")
    .max(100, "Company Name is too long"),
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email is too long"),
  taxNumber: z
    .string()
    .regex(/^\d+$/, "Tax Number can only be a number")
    .min(1, "Tax Number is required")
    .max(15, "Tax Number is too long"),
  currencyType: z
    .string()
    .min(1, "Currency Type is required")
    .max(3, "Currency Type is too long"),
});
const SettingsInfoCard = () => {
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

  type FieldName =
    | "firstName"
    | "lastName"
    | "companyName"
    | "email"
    | "taxNumber"
    | "currencyType";

  const fields: {
    label: string;
    name: FieldName;
    type?: string;
    options?: string[];
  }[] = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email", name: "email", type: "email" },
    { label: "Company Name", name: "companyName" },
    { label: "Tax Number", name: "taxNumber" },
    {
      label: "Currency Type",
      name: "currencyType",
      type: "select",
      options: ["usd", "eur", "gbp"],
    },
  ];
  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Flex direction={"column"} gap={[2, 2, 2, 2, 4]}>
          <Heading as="h3" size="md" color={"green.400"}>
            <Icon as={FaUsers} mr={2} />
            Company & User Information
          </Heading>
          {fields.map(({ label, name, type, options }) => (
            <FormControl id={name} key={name} isInvalid={!!errors[name]}>
              <FormLabel fontSize={"xs"}>{label}</FormLabel>
              {type === "select" ? (
                <Select {...register(name)}>
                  {options?.map((option) => (
                    <option key={option} value={option}>
                      {option.toUpperCase()}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  {...register(name)}
                  type={type || "text"}
                  focusBorderColor="green.400"
                />
              )}
              <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
            </FormControl>
          ))}
          <Button
            type="submit"
            colorScheme="green"
            width={"full"}
            _hover={{ bg: "green.300" }}
            _active={{ bg: "blue.600", transform: "scale(0.95)" }}
          >
            Save
          </Button>
        </Flex>
      </form>
    </Card>
  );
};
export default SettingsInfoCard;
