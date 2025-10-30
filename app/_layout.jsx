import { Link } from "expo-router";
import React from "react";
import { Stack } from "expo-router/stack";


export default function Layout() {
  return (
    <>
        <Stack>
            <Stack.Screen 
                options={{ headerShown: false }} 
            />
        </Stack>
        <Link href="/index" />
        
    </>
  );
}