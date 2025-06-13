import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Notifications = () => {
  const notifications = {
    today: [
      {
        icon: <Feather size={16} name="book" color="green" />,
        title: "Booking Updated!",
        time: "4:00 PM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        icon: <Feather size={16} name="book" color="green" />,
        title: "Booking Received!",
        time: "3:39 PM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        icon: <Feather size={16} name="book" color="green" />,
        title: "Rate Your Recent Service!",
        time: "2:10 PM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        icon: <Feather size={16} name="book" color="green" />,
        title: "Get 70% Off on AC Serv...",
        time: "9:00 AM",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
    ],
    yesterday: [
      {
        icon: <Feather size={16} name="book" color="green" />,
        title: "Booking Received!",
        time: "1D",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
    ],
  };

  const NotificationItem = ({ icon, title, time, description }: any) => (
    <View className="bg-lightBlue px-4 h-24 py-2 rounded-xl mb-4 flex-row items-start">
      <View className="bg-lightGreen p-3 rounded-full justify-center items-center">
        {icon}
      </View>
      <View className="flex-1 ml-3">
        <View className="flex-row justify-between items-start">
          <Text className="font-poppinsSemiBold text-sm text-black">
            {title}
          </Text>
          <Text className="text-xs text-gray-500 font-poppinsLight">
            {time}
          </Text>
        </View>
        <Text className="text-[10px] text-gray-600 mt-1 font-poppinsLight">
          {description}
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
      <ScrollView className="flex-1 bg-white dark:bg-black px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center"
          >
            <StyledComponent
              component={Feather}
              name="arrow-left"
              className="text-black dark:text-white"
              size={20}
            />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-black dark:text-white">
            Notifications
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

        {/* Today */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="font-poppinsSemiBold text-lg">Today</Text>
          <Text className="text-primaryColor text-sm">Mark All As Read</Text>
        </View>

        {notifications.today.map((n, index) => (
          <NotificationItem key={index} {...n} />
        ))}

        {/* Yesterday */}
        <Text className="text-lg font-poppinsSemiBold text-black dark:text-white mt-4 mb-2">
          Yesterday
        </Text>
        {notifications.yesterday.map((n, index) => (
          <NotificationItem key={index} {...n} />
        ))}
      </ScrollView>
    </>
  );
};

export default Notifications;
