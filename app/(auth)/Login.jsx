import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
export default function Login ()  {
    return (
        <View>
            <Link href="/index">Go to Register</Link>
            <Text>Login Screen</Text>
        </View>
    );
}