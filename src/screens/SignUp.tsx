import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required("Informe o nome."),
    email: yup.string().required("Informe o email.").email("E-mail invalido."),
    password: yup.string().required("Informe a senha.").min(6, "A senha deve ter pelo menos 6 digitos."),
    password_confirm: yup.string().required("Confirme a Senha.").oneOf([yup.ref("password"), ""], "A confirmação da senha nao confere.")
})

type FormData = yup.InferType<typeof signUpSchema>;

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(signUpSchema)
    })

    function handleSignUp(data: FormData) {
        console.log(data)
    }

    function handleGoBack () {
        navigation.goBack()
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

                <Center gap="$2" flex={1}>
                    <Heading color="$gray100">Crie sua Conta</Heading>

                    <Controller
                    control={control}
                    name="name"
                    render={({ field: {onChange, value} }) => (
                        <Input 
                        placeholder="Nome"
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.name?.message}
                        />
                    )}
                    />

                    <Controller
                    control={control}
                    name="email"
                    render={({ field: {onChange, value} }) => (
                        <Input 
                        placeholder="E-mail" 
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.email?.message}
                        />
                    )}
                    />

                    <Controller
                    control={control}
                    name="password"
                    render={({ field: {onChange, value} }) => (
                        <Input 
                        placeholder="Senha"
                        secureTextEntry
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.password?.message}
                        />
                    )}
                    />

                    <Controller
                    control={control}
                    name="password_confirm"
                    render={({ field: {onChange, value} }) => (
                        <Input 
                        placeholder="Confirme Senha"
                        secureTextEntry
                        onChangeText={onChange}
                        value={value}
                        onSubmitEditing={handleSubmit(handleSignUp)}
                        returnKeyType="send"
                        errorMessage={errors.password_confirm?.message}
                        />
                    )}
                    />

                    <Button 
                    title="Criar e acessar"
                    onPress={handleSubmit(handleSignUp)}
                    />

                </Center>

                    <Button
                    mt="$12"
                    title="Voltar para tela de login"
                    variant="outline"
                    onPress={handleGoBack}
                    />

            </VStack>
        </VStack>
        </ScrollView>
    )
}