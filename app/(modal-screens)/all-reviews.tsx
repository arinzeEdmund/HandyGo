import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";


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
            All Reviews
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>


      {/* Profile Options */}
      <ScrollView className="space-y-4 mb-6" showsVerticalScrollIndicator={false}>
          {[
            {
              name: "Gray Huge",
              rating: 4.5,
              date: "1 Day Ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              avatar: "https://i.pravatar.cc/100?img=8",
            },
            {
              name: "Phill Mike",
              rating: 4.0,
              date: "1 Day Ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              avatar: "https://i.pravatar.cc/100?img=12",
            },
          ].map((review, index) => (
            <View key={index} className="bg-lightBlue p-4 rounded-xl mr-4 w-full">
              <View className="flex-row items-center mb-2">
                <Avatar.Image size={32} source={{ uri: review.avatar }} />
                <View className="ml-3">
                  <Text className="font-poppinsSemiBold text-black text-sm">
                    {review.name}
                  </Text>
                  <Text className="text-gray-400 text-xs font-poppinsLight">
                    {review.date}
                  </Text>
                </View>
                <View className="ml-auto flex-row items-center">
                  <Text className="text-yellow-500 font-poppinsLight text-sm">
                    {review.rating}
                  </Text>
                  <Ionicons
                    name="star"
                    size={14}
                    color="#FACC15"
                    className="ml-1"
                  />
                </View>
              </View>
              <Text className="text-xs text-gray-600 font-poppinsLight">
                {review.text}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
    </>
  );
};

export default Profile;
