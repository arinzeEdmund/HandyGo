import ChatTabIcon from "@/components/navigationTabs/chat";
import HomeTabIcon from "@/components/navigationTabs/home";
import ProfileTabIcon from "@/components/navigationTabs/profile";
import ReviewsTabIcon from "@/components/navigationTabs/reviews";
import SchedulesTabIcon from "@/components/navigationTabs/schedules";
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
        name="(schedules)"
        options={{
          tabBarIcon: ({ focused }) => <SchedulesTabIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="(reviews)"
        options={{
          tabBarIcon: ({ focused }) => <ReviewsTabIcon focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="(chat)"
        options={{
          tabBarIcon: ({ focused }) => <ChatTabIcon focused={focused} />,
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
