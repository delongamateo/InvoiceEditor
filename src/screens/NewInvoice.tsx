import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FieldApi, FormState, useField, useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import PDF, { DownloadPDF } from "../components/PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <FormErrorMessage>{field.state.meta.touchedErrors}</FormErrorMessage>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

const NewInvoice = () => {
  const bgColor = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.4)");
  const textColor = useColorModeValue("black", "white");

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    // Add a validator to support Zod usage in Form and Field
    validatorAdapter: zodValidator,
  });

  const firstNameField = useField({ form, name: "firstName" });

  return (
    <Flex gap={2} w={"full"}>
      <Stack p={8} w={"full"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <Stack
            bg={bgColor}
            color={textColor}
            backdropFilter="blur(10px)"
            borderRadius="md"
            p={4}
            justify="center"
            width="full"
            minHeight="full"
            boxShadow="xl"
            gap={12}
          >
            <Stack>
              <Stack>
                {/* A type-safe field component*/}
                <form.Field
                  name="firstName"
                  validators={{
                    onChange: z
                      .string()
                      .min(3, "First name must be at least 3 characters"),
                    onChangeAsyncDebounceMs: 500,
                    onChangeAsync: z.string().refine(
                      async (value) => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        return !value.includes("error");
                      },
                      {
                        message: "No 'error' allowed in first name",
                      }
                    ),
                  }}
                  children={(field) => {
                    // Avoid hasty abstractions. Render props are great!
                    return (
                      <>
                        <FormLabel htmlFor={field.name}>First Name:</FormLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          bg={"white"}
                          color={"black"}
                        />
                        <FieldInfo field={field} />
                      </>
                    );
                  }}
                />
              </Stack>
              <Stack>
                <form.Field
                  name="lastName"
                  children={(field) => (
                    <>
                      <FormLabel htmlFor={field.name}>Last Name:</FormLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        bg={"white"}
                        color={"black"}
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </Stack>
            </Stack>
            <DownloadPDF
              document={<PDF value={firstNameField.getValue()} />}
              fileName="invoice.pdf"
            />
          </Stack>
        </form>
      </Stack>
      <Flex w={"full"}>
        <PDF value={firstNameField.getValue()} />
      </Flex>
    </Flex>
  );
};

export default NewInvoice;
