import { View, Text, Platform, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CartContext, useCart } from "@/provider/CartProvider";
import CartListItem from "@/components/CartListItem";

const CartScreen = () => {
    const { items } = useCart();

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
            />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartScreen;
