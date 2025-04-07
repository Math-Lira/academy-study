import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, VStack, Text, Heading, useToast } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { useState } from "react";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {
    const [ userPhoto, setuserPhoto ] = useState("https://github.com/Math-Lira.png")
    const toast = useToast()

    async function hadleUserPhotoSelect() {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: [
                    "images"
                ],
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            })
    
            if(photoSelected.canceled) {
                return
            }
    
            const photoURI = photoSelected.assets[0].uri
            
            if(photoURI) {
                const photoInfo = await FileSystem.getInfoAsync(photoURI) as { size:number; }
    
                if(photoInfo && (photoInfo.size / 1024 / 1024) > 5){
                    return toast.show({
                        placement: "top",
                        render: ({ id }) => (
                            <ToastMessage 
                            id={id} 
                            action="error" 
                            title="Imagem muito grande"
                            description="Essa imagem e muito grande. Escolha uma até 5MB." 
                            onClose={() => toast.close(id)}/>
                        )
                    })
                }
    
                setuserPhoto(photoURI)
            }
        } catch(error){
            console.log(error)
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt="$6" px="$10">
                    <UserPhoto 
                    source={{ uri: userPhoto }} 
                    alt="foto do usuario"
                    size="xl"
                    />

                    <TouchableOpacity onPress={hadleUserPhotoSelect}>
                        <Text
                        color="$green500"
                        fontFamily="$heading"
                        fontSize="$md"
                        mt="$2"
                        mb="$8"
                        >Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Nome" bg="$gray600"/>
                        <Input value="matheus@gmail.com" bg="$gray600" isReadOnly/>
                    </Center>
                    <Heading
                    alignSelf="flex-start"
                    fontFamily="$heading"
                    color="$gray200"
                    fontSize="$md"
                    mt="$12"
                    mb="$2"
                    > Alterar senha</Heading>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry/>
                        <Input placeholder="Nova aenha" bg="$gray600" secureTextEntry/>
                        <Input placeholder="Confirme a Nova senha" bg="$gray600" secureTextEntry/>

                        <Button
                        title="Atualizar"
                        />
                    </Center>

                </Center>
            </ScrollView>
        </VStack>
    )
}