import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { ExerciseCard } from "@components/ExerciseCard";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

import React, { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
    const [ groupSelected, setgroupSelected ] = useState("costa")
    const [ groups, setgroups ] = useState(["costa", "Biceps", "Triceps", "Ombro"])

    return (
        <VStack flex={1}>
            <HomeHeader/>

            <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setgroupSelected(item)}
                    />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 32 }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />

            <VStack px="$8">
                <HStack justifyContent="space-between" mb="$5" alignItems="center">
                    <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
                        Exercícios
                    </Heading>

                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        4
                    </Text>
                </HStack>

                <ExerciseCard/>

            </VStack>
        </VStack>
    )
}