import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack, Tabs } from "expo-router";
import { StackScreen } from 'react-native-screens';

const queryClient = new QueryClient();



export default function MainTabsLayout() {


  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="home" options={{ headerShown: false }}/>
        <Stack.Screen name="myticket" options={{ headerShown: false }}/>
        <Stack.Screen name="artists/[id]" options={{ headerShown: false }}/>
        <Stack.Screen name="resirvation" options={{ headerShown: false }}/>
      </Stack>
    </QueryClientProvider>)
}