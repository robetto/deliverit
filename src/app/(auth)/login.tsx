import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import { Link, Stack } from "expo-router";
import { supabase } from "@/lib/supabase";

const LogInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        }); 
        
        error
            ? Alert.alert("login: ", `error login text: ${error}`)
            : Alert.alert("ottimo login bro");

        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Sign in" }} />

            <Text style={styles.label}>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="jon@gmail.com"
                style={styles.input}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder=""
                style={styles.input}
                secureTextEntry
            />

            <Button
                text={loading ? "caricando..." : "login"}
                disabled={loading}
                onPress={signInWithEmail}
            />
            <Link href="/registrati" style={styles.textButton}>
                Create an account
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        flex: 1,
    },
    label: {
        color: "gray",
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 5,
    },
    textButton: {
        alignSelf: "center",
        fontWeight: "bold",
        color: Colors.light.tint,
        marginVertical: 10,
    },
});

export default LogInScreen;
