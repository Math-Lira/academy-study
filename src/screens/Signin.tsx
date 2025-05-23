import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function Signin() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
        <VStack flex={1}>
            <Image 
            w="$full"
            h={624}
            defaultSource={BackgroundImg}
            source={BackgroundImg} 
            alt="Pessoas treinando"
            position="absolute"
            />

            <VStack flex={1} px="$10" pb="$16">
                <Center my="$24">
                    <Logo/>
                    <Text color="$gray100" fontSize="$sm" mt={3}>
                        Treine sua mente e seu corpo.
                    </Text>
                </Center>

                <Center gap="$2">
                    <Heading color="$gray100">Acesse a Conta</Heading>

                    <Input 
                    placeholder="E-mail" 
                    keyboardType="email-address"
                    autoCapitalize="none"/>
                    
                    <Input 
                    placeholder="Senha"
                    secureTextEntry/>
                    <Button
                    title="Acessar"
                    
                    />
                </Center>

                <Center flex={1} justifyContent="flex-end" mt="$4">
                    <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$bold">Ainda não tem acesso?</Text>
                    <Button
                    title="Criar Conta"
                    variant="outline"
                    onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </VStack>
        </ScrollView>
    )
}