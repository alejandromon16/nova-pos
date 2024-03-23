import React, { useEffect, useState } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  EXPO_PUBLIC_CONVEX_URL,
  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
} from "@env";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import { config } from "config/gluestack-ui.config";
import 'react-native-reanimated'
import 'react-native-gesture-handler'

LogBox.ignoreAllLogs();

const convex = new ConvexReactClient(EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(auth)";
    console.log("User changed: ", isSignedIn);
    if (isSignedIn && !inTabsGroup) {
      router.replace("/home");
    } else if (!isSignedIn) {
      router.replace("/login");
    }
  }, [isSignedIn]);
  return( 
    <Slot />
  );
};

export default function Rootlayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepareApp() {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
    prepareApp();
  }, []);
  if (!appIsReady) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
       <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <GluestackUIProvider config={config}>
          <InitialLayout />
        </GluestackUIProvider>
       </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
