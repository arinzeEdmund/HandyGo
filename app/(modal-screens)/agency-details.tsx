import CustomButton from "@/components/shared/customButton";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { StyledComponent } from "nativewind";
import React from "react";
import {
    Image,
    Linking,
    ScrollView,
    Share,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Avatar } from "react-native-paper";

const AgencyDetails = () => {
  return (
    <View className="flex-1 bg-white dark:bg-darkModeBgColor">
      {/* Header Image */}
      <View className="relative">
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1194917931/photo/cheerful-young-man-part-of-a-cleaning-team-holding-a-tray-with-cleaning-products-all-smiling.jpg?s=612x612&w=0&k=20&c=HKDncUkMlkBInvU892q2SonzUXkWhol9K0VmrtDWCgo=",
          }}
          className="w-full h-60"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-12 left-4 w-10 h-10 rounded-full bg-lightBlue justify-center items-center"
        >
          <StyledComponent
            component={Feather}
            name="arrow-left"
            className="text-black dark:text-white"
            size={20}
            onPress={() => router.back()}
          />
        </TouchableOpacity>
      </View>

      {/* Service Info */}
      <View
        className="px-4 pt-4 mt-[-10px] bg-white rounded-t-2xl"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-xl font-bold text-black font-poppinsBold">
              CleanAll & Sons Limited
            </Text>
            <Text className="text-gray-500 mt-1 font-poppinsRegular">
              Robert Kelvin |{" "}
              <Text className="text-yellow-500 font-semibold">★ 4.5</Text> (532
              Reviews)
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="heart" size={24} color="red" />
          </TouchableOpacity>
        </View>

    <ScrollView className="bg-white dark:bg-darkModeBgColor" showsVerticalScrollIndicator={false}>

   

        {/* Contact Icons */}
        <View className="flex-row justify-between mt-6 px-2">
          {[
            { icon: "globe", label: "Website" },
            { icon: "phone", label: "Call" },
            { icon: "message-circle", label: "Chat" },
            { icon: "share-2", label: "Share" },
          ].map((item, index) => (
            <TouchableOpacity
              onPress={async () => {
                if (item.label === "Chat") {
                  router.push("/chat-screen");
                }

                if (item.label === "Website") {
                  await WebBrowser.openBrowserAsync("https://www.apple.com");
                }

                if (item.label === "Call") {
                  Linking.openURL("tel:+13605836065");
                }

                if (item.label === "Share") {
                  await Share.share({
                    message:
                      "Check out this awesome service: myapp://details-screen",
                    url: "myapp://details-screen",
                    title: "Details Screen",
                  });
                }
              }}
              key={index}
              className="items-center"
            >
              <View className="bg-lightGreen p-4 rounded-full mb-1">
                <StyledComponent
                  component={Feather}
                  name={item.icon as any}
                  className="text-primaryColor dark:text-white"
                  size={20}
                />
              </View>
              <Text className="text-xs text-black font-poppinsRegular">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* About Section */}
        <View className="mt-6">
          <Text className="text-black font-poppinsSemiBold text-base mb-2">
            About This Service
          </Text>
          <Text className="text-sm text-gray-500 font-poppinsLight leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard...
          </Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mt-6">
          <View className="bg-lightBlue px-4 py-3 rounded-xl w-[48%]">
            <Text className="text-lg font-bold text-black font-poppinsSemiBold">
              200K+
            </Text>
            <Text className="text-xs text-gray-500 mt-1 font-poppinsLight">
              Happy Customer
            </Text>
          </View>
          <View className="bg-lightBlue px-4 py-3 rounded-xl w-[48%]">
            <Text className="text-lg font-bold text-black font-poppinsSemiBold">
              99%
            </Text>
            <Text className="text-xs text-gray-500 mt-1 font-poppinsLight">
              Client Satisfaction
            </Text>
          </View>
        </View>

        {/* Reviews */}
        <View className="mt-4 mb-4 flex-row justify-between items-center">
          <Text className="text-black font-poppinsSemiBold text-base">
            Reviews
          </Text>
          <Text
            className="text-primaryColor text-sm font-poppinsSemiBold"
            onPress={() => router.push("/all-reviews")}
          >
            View All
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            <View key={index} className="bg-lightBlue p-4 rounded-xl mr-4 w-64">
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

        {/* Price & Button */}
        <View className="flex-row items-center justify-between mt-2 mb-10">
          <Text className="text-xl font-poppinsBold text-black">
            $1,600
            <Text className="text-base font-poppinsSemiBold text-gray-400">
              /hour
            </Text>
          </Text>
          <CustomButton
            title="Book Now"
            buttonStyle="bg-primaryColor rounded-full h-12 w-32"
            textStyle="text-white text-sm font-semibold"
            onPress={() => {
              router.push("/booking-form");
            }}
          />
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AgencyDetails;
