import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

import products from "assets/data/products";

const product = products[0];

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.image }}
                style={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    aspectRatio: 1,
                }}
            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.light.tint,
    },
});
