import Button from "@/components/Button";
import { useCart } from "@/provider/CartProvider";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

export default function Page() {
    const { addItem } = useCart();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
    const { id } = useLocalSearchParams();

    const router = useRouter();

    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return <Text>Product not found</Text>;
    }

    const addToCart = () => {
        addItem(product, selectedSize);
        router.push("/cart");
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product?.name }} />
            <Image style={styles.image} source={{ uri: product.image }} />

            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
    },
    image: {
        width: "100%",
        maxWidth: 100,
        aspectRatio: 1,
    },
    price: {
        fontSize: 20,
        color: "red",
    }, 
    title: {
        fontSize: 20,
        color: "red",
        marginBottom: 20
    }, 
});
