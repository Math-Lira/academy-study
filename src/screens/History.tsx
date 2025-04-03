import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { SectionList } from "react-native";

export function History() {
    const [ exercises, setexercises ] = useState([
        {
            title:"21.01.25",
            data: ["Puxada Frontal", "Remada Unilateral"]
        },
        {
            title:"26.01.25",
            data: ["Puxada Frontal"]
        }
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader
            title="Historico"
            />
            <SectionList
            sections={exercises}
            keyExtractor={item => item}
            renderItem={() => <HistoryCard/>}
            renderSectionHeader={({ section }) => (
                <Heading 
                color="$gray200" 
                fontSize="$md" 
                mt="$10" 
                mb="$3" 
                fontFamily="$heading">{section.title}</Heading>
            )}
            style={{ paddingHorizontal: 32 }}
            contentContainerStyle={
                exercises.length === 0 && { flex: 1, justifyContent: "center" }
            }
            ListEmptyComponent={() => (
                <Text color="$gray100" textAlign="center">
                    Não hã exercícios registados ainda. {"\n"} Vamos fazer exercícios hoje?
                </Text>
            )}
            showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}