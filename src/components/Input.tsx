import { Input as GluestackInput, InputField, FormControl, FormControlErrorText, FormControlError } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean;
    isInvalid?: boolean;
    errorMessage?: string | null;
}

export function Input ({ isReadOnly = false, isInvalid = false, errorMessage = null, ...rest }: Props) {
    const invalid =  !!errorMessage || isInvalid
        
    return (
        <FormControl isInvalid={invalid} w="$full" mb="$4">
        <GluestackInput
        isInvalid={isInvalid}
        h="$14" 
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
            borderWidth: 1,
            borderColor: invalid ? "$red500" : "$green500"
        }}
        $invalid={{
            borderWidth: 1,
            borderColor: "$red500"
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        >
            <InputField 
            bg="$gray700" 
            px="$4" 
            color="$white"
            fontFamily="$bold"
            placeholderTextColor="$gray300"
            {...rest}/>
        </GluestackInput>

        <FormControlError>
            <FormControlErrorText color="$red500">
                {errorMessage}
            </FormControlErrorText>
        </FormControlError>

        </FormControl>
    )
}