import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: "Details: " + id }} />
            <Text>Blog post: {id}</Text>
        </View>
    );
}
