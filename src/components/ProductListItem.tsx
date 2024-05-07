import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Product as ProductType } from "@/types";
import { Link } from "expo-router";

const defaultImage = "default.png";

const ProductListItem = ({ product }: { product: ProductType }) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: product.image || defaultImage }}
                    style={{
                        width: 100,
                        height: 100,
                        objectFit: "contain",
                        aspectRatio: 1,
                    }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    );
};

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flex: 1,
        maxWidth: "50%",
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
