import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { ExerciseCard } from "@components/ExerciseCard";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
    const [ exercises, setexercises ] = useState(["Flexão da Barra", "Remada curvada", "Remada unilateral", "Levantamento Terra"])
    const [ groups, setgroups ] = useState(["costa", "Biceps", "Triceps", "Ombro"])
    const [ groupSelected, setgroupSelected ] = useState("costa")

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenExerciseDetails() {
        navigation.navigate("exercise")
    }

    return (
        <VStack flex={1}>
            <HomeHeader/>

            <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLowerCase() === item.toLocaleLowerCase()}
                        onPress={() => setgroupSelected(item)}
                    />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 32 }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />

            <VStack px="$8" flex={1}>
                <HStack justifyContent="space-between" mb="$5" alignItems="center">
                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
                        Exercícios
                    </Heading>

                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        { exercises.length }
                    </Text>
                </HStack>

                <FlatList 
                data={exercises} 
                keyExtractor={item => item} 
                renderItem={(() => <ExerciseCard onPress={handleOpenExerciseDetails}/>)}
                showsVerticalScrollIndicator={false}
                />

            </VStack>
        </VStack>
    )
}