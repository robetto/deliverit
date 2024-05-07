import { View, Text, Platform, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartContext, useCart } from "@/provider/CartProvider";
import CartListItem from "@/components/CartListItem";
import Button from "@/components/Button";

const CartScreen = () => {
    const { items, total } = useCart();

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ gap: 10 }}
            />

            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Total {total}
            </Text>
            <Button text="Checkout" />

            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartScreen;
