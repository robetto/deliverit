import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState("");

    const [image, setImage] = useState<string | null>(null);

    const resetFields = () => {
        setName("");
        setPrice("");
    };

    const validateInput = () => {
        setErrors("");
        if (!name) {
            setErrors("Name is required");
            return false;
        }
        if (!price) {
            setErrors("Price is required");
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setErrors("Price is not a number");
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }
        resetFields();
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Create Product" }} />
            <Image
                source={{ uri: image || defaultPizzaImage }}
                style={styles.image}
            />
            <Text onPress={pickImage} style={styles.textButton}>
                Select image
            </Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="name"
                style={styles.input}
            />

            <Text style={styles.label}>Price</Text>
            <TextInput
                value={price}
                onChangeText={setPrice}
                placeholder="9.99"
                style={styles.input}
                keyboardType="numeric"
            />

            {errors ?? <Text style={{ color: "red" }}>{errors}</Text>}

            <Button text="Create" onPress={onCreate} />
        </View>
    );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontWeight: "bold",
        color: Colors.light.tint,
    },
    label: {
        color: "gray",
    },
    image: {
        width: "50%",
        aspectRatio: 1,
        maxWidth: 150,
        border: "2px solid red",
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
    },
});
