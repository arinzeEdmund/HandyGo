import { chatMessages } from "@/constants/messages";
import { Entypo, Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
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

const ChatScreen = () => {
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
          <View className="flex-row items-center w-[70%]">
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJ1c3NpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
                }}
                className="w-10 h-10 rounded-full mr-2"
              />
              <View className="absolute bottom-0 right-0 w-4 h-4 bg-primaryColor rounded-full border-2 border-white" />
            </View>
            <View>
              <Text className="font-poppinsSemiBold text-base">
                Oliver James
              </Text>
              <Text className="text-green-500 text-sm font-poppinsLight">
                Online
              </Text>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center">
            <StyledComponent
              component={Entypo}
              name="dots-three-vertical"
              className="text-black dark:text-white"
              size={20}
            />
          </TouchableOpacity>
        </View>

        {/* Chat Messages */}
        <ScrollView className="flex-1 mb-4">
          {chatMessages.map((msg, index) => (
            <View
              key={index}
              className={`mb-2 ${
                msg.from === "user" ? "items-end" : "items-start"
              }`}
            >
              <View
                className={`max-w-[80%] p-3 rounded-xl ${
                  msg.from === "user"
                    ? "bg-primaryColor rounded-br-none"
                    : "bg-lightBlue rounded-bl-none"
                }`}
              >
                <Text
                  className={`text-sm font-poppinsRegular ${
                    msg.from === "user" ? "text-white" : "text-black"
                  }`}
                >
                  {msg.text}
                </Text>
              </View>
              <Text className="text-xs text-gray-400 mt-1 font-poppinsLight">
                {msg.time}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input Box */}
        <View className="flex-row items-center mb-6 rounded-full">
          <View className="w-[80%] h-12 mt-3 mb-3 px-4">
            <TouchableOpacity className="flex-row w-full h-full bg-lightBlue rounded-lg justify-between items-center px-2">
              <StyledComponent
                component={FontAwesome5}
                name={"smile"}
                className="text-gray-400 dark:text-white"
                size={18}
                onPress={() => {}}
              />
              <TextInput
                placeholder="Write a message..."
                placeholderTextColor={""}
                className="w-[74%] h-full"
              />
              <StyledComponent
                component={Fontisto}
                name={"paperclip"}
                className="text-gray-400 dark:text-white mr-2"
                size={20}
                onPress={() => router.push("/filter-screen")}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="ml-2 bg-primaryColor h-12 w-12 justify-center items-center rounded-full">
            <StyledComponent
              component={Feather}
              name={"send"}
              className="text-white"
              size={18}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChatScreen;
