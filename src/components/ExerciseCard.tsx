import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack
            bg="$gray500"
            alignItems="center"
            p="$2"
            pr="$4"
            rounded="$md"
            mb="$3"
            >
                <Image
                source={{ uri: "https://files.passeidireto.com/d499a1b2-1e4f-4225-aeaf-7b739bba53a1/d499a1b2-1e4f-4225-aeaf-7b739bba53a1.jpeg" }}
                alt="imagem do exercicio"
                w="$16"
                h="$16"
                rounded="$md"
                mr="$4"
                resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="$lg" color="$white" fontFamily="$heading">Flexão na Barra</Heading>
                    <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>

                <Icon as={ChevronRight} color="$gray300"/>

            </HStack>
        </TouchableOpacity>
    )
}