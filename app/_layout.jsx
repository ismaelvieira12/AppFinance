import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Wellcome" options={{ headerShown: false }} />
        <Stack.Screen name="/Login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/Register" options={{ headerShown: false }} />
    </Stack>
  );
}