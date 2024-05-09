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

            <Text>Select size</Text>

            <View style={styles.sizes}>
                {sizes.map((size, ind) => (
                    <Pressable
                        onPress={() => setSelectedSize(size)}
                        style={[
                            styles.size,
                            {
                                backgroundColor:
                                    selectedSize === size ? "black" : "white",
                            },
                        ]}
                        key={ind}
                    >
                        <Text
                            style={[
                                styles.sizeText,
                                {
                                    color:
                                        selectedSize === size
                                            ? "white"
                                            : "black",
                                },
                            ]}
                        >
                            {size}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <Text style={styles.price}>${product.price}</Text>

            <Button text="Aggiungi al carrello" onPress={addToCart} />
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
    sizes: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        gap: 10,
    },
    size: {
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "#cecece",
    },
    sizeText: {
        fontSize: 14,
    },
});
