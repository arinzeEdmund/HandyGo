import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const profileOptions = [
  {
    title: "Edit Profile",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
  {
    title: "Manage Address",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
  {
    title: "Payment Methods",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
  {
    title: "My Booking",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
  {
    title: "Settings",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
  {
    title: "Help Center",
    icon: <AntDesign size={17} name={"book"} color="#22c55e" />,
  },
];

const Profile = () => {
  return (
    <>
    <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />
    <View className="flex-1 bg-white px-4">
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
            Favourites
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

      {/* Profile Info */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1c3NpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" }}
          className="w-20 h-20 rounded-full mb-2"
        />
        <Text className="text-lg font-bold">Jonathan Richard</Text>
        <Text className="text-gray-500 text-sm">
          jonathanrichard123@gmail.com
        </Text>
      </View>

      {/* Profile Options */}
      <ScrollView className="space-y-4 mb-6" showsVerticalScrollIndicator={false}>
        {profileOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-between bg-lightBlue rounded-xl p-4"
          >
            <View className="flex-row items-center">
              <View className="bg-lightGreen h-10 w-10 rounded-full mr-3 items-center justify-center">
                {item.icon}
              </View>
              <Text className="text-sm font-poppinSemiBold">{item.title}</Text>
            </View>
            <StyledComponent
                  component={Feather}
                  name="chevron-right"
                  className="text-black dark:text-white"
                  size={14}
                />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    </>
  );
};

export default Profile;
