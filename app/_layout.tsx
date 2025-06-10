import { ReactQueryProvider } from "@/lib/providers/react-query-provider";
import { setCurrentPathname } from "@/utils/pathTracker";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { BlurView } from "expo-blur";
import { Slot, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef, useState } from "react";
import { Alert, AppState, StyleSheet, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const appState = useRef(AppState.currentState);
  const [isBlurred, setIsBlurred] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (error) {
      Alert.alert(error.name, error.message);
    }
  }, [loaded, error]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "background" || nextAppState === "inactive") {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ReactQueryProvider>
      <RootSiblingParent>
        <View style={{ flex: 1 }}>
          <Slot />
          {isBlurred && (
            <BlurView
              intensity={100}
              tint="dark"
              style={{
                ...StyleSheet.absoluteFillObject,
                zIndex: 100,
              }}
            />
          )}
        </View>
      </RootSiblingParent>
    </ReactQueryProvider>
  );
};

export default RootLayout;
