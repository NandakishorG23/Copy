import { Stack } from 'expo-router';

export const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: true }} />
    </Stack>
  );
};
