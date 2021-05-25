import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError; 
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
     { !!label && <FormLabel htmlFor={name} margin="0" paddingBottom="4px" fontSize="0.875rem">{label}</FormLabel> }
      <ChakraInput
        name={name}
        height="48px"
        bgColor="white"
        color="blue.600"
        textAlign="center"
        _placeholder={{
          color: "blue.600",
          fontWeight: 600
        }}
        fontSize="1.125rem"
        ref={ref}
        {...rest}
      />

      {!!error && ( <FormErrorMessage>{error.message}</FormErrorMessage> )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)