import { messages } from "@/constants/messages";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Chat = () => {
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
            Messages
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
        </View>

        {/* Search Input */}
        <View className="w-full h-14  mb-3">
          <TouchableOpacity className="flex-row w-full h-full bg-lightBlue rounded-lg justify-between items-center px-2">
            <StyledComponent
              component={EvilIcons}
              name={"search"}
              className="text-gray-500 dark:text-white"
              size={24}
              onPress={() => {}}
            />
            <TextInput
              placeholder="Search messages..."
              placeholderTextColor={""}
              className="w-[90%] h-full"
            />
          </TouchableOpacity>
        </View>

        {/* Messages List */}
        <ScrollView>
          {messages.map((msg, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row justify-between items-center mb-4 mt-1"
              onPress={() => router.push("/chat-screen")}
            >
              <View className="flex-row items-center">
                <View className="relative">
                  <Image
                    source={{ uri: msg.image }}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  {msg.online && (
                    <View className="absolute bottom-0 right-0 w-3 h-3 bg-primaryColor rounded-full border-2 border-white" />
                  )}
                </View>
                <View>
                  <Text className="font-poppinsSemiBold text-base">
                    {msg.name}
                  </Text>
                  <Text className="text-gray-400 text-sm font-poppinsLight">
                    {msg.text}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-400 text-xs font-poppinsLight">
                {msg.time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Chat;
