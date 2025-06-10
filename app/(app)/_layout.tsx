import HomeTabIcon from "@/components/navigationTabs/home";
import PayTabIcon from "@/components/navigationTabs/pay";
import ProfileTabIcon from "@/components/navigationTabs/profile";
import ReceiveTabIcon from "@/components/navigationTabs/receive";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const AppLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          elevation: 0,
          backgroundColor: colorScheme === "dark" ? "#001124" : "#fff",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 13,
          borderTopWidth: 0,
          borderTopColor: "transparent",
          shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ focused }) => <HomeTabIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="(receive)"
        options={{
          tabBarIcon: ({ focused }) => <ReceiveTabIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="(pay)"
        options={{
          tabBarIcon: ({ focused }) => <PayTabIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ focused }) => <ProfileTabIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
