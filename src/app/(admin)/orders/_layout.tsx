import React from "react";
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const MenuStack = () => {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="index"
                options={{ title: "Menu1a" }}
            ></Stack.Screen>
        </Stack>
    );
};

export default MenuStack;
