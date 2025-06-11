import CustomButton from "@/components/shared/customButton";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SelectPaymentMethod = () => {
  return (
    <>
      {/* Top-only Safe Area */}
      <SafeAreaView className="bg-white dark:bg-darkModeBgColor" />

      {/* Main container */}
      <View className="flex-1 bg-white dark:bg-darkModeBgColor relative">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          className="bg-white p-4"
        >
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
              Select Payment Method
            </Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center" />
          </View>

          <View
            className="flex-row h-16 bg-lightBlue px-4 rounded-xl justify-between items-center mt-4"
          >
            <View className="h-14 bg-lightBlue flex-row items-center w-[70%]">
              <TouchableOpacity className="w-10 h-10 rounded-full bg-lightGreen justify-center items-center">
                <StyledComponent
                  component={MaterialCommunityIcons}
                  name="office-building"
                  className="text-primaryColor dark:text-white"
                  size={20}
                />
              </TouchableOpacity>
              <View>
                <Text className="text-sm font-poppinsSemiBold text-black dark:text-white ml-2">
                  Cash
                </Text>
              </View>
            </View>
            <View className="h-14 bg-lightBlue flex-row items-center">
                <TouchableOpacity
                  onPress={() => router.back()}
                  className="w-5 h-5 rounded-full justify-center items-center mr-1"
                >
                  <StyledComponent
                    component={Feather}
                    name="check-circle"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                </TouchableOpacity>
            </View>
          </View>

        <Text className="font-bold text-lg my-5 ">More Payment Options</Text>

          {[
            { label: "Paypal", selected: false, url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/250_Paypal_logo-512.png"},
            { label: "Google", selected: false, url: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" },
            { label: "Apple Pay", selected: false, url: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
          ].map((item, index) => (
            <>
              <View
                key={index}
                className="flex-row h-16 bg-lightBlue px-4 rounded-xl justify-between items-center mb-4"
              >
                <View className="h-14 bg-lightBlue flex-row items-center w-[70%]">
                  <TouchableOpacity className="w-12 h-12 rounded-full bg-lightGreen justify-center items-center">
                  <Image
                  source={{
                    uri: item.url,
                  }}
                  resizeMode="contain"
                  className="w-6 h-6"
                  
                />

                  </TouchableOpacity>
                  <View>
                    <Text className="text-sm font-poppinsSemiBold text-black dark:text-white ml-2">
                      {item.label}
                    </Text>
                  </View>
                </View>
                <View className="h-14 bg-lightBlue flex-row items-center">
                  {item.selected ? (
                    <TouchableOpacity
                      onPress={() => router.back()}
                      className="w-5 h-5 rounded-full justify-center items-center mr-1"
                    >
                      <StyledComponent
                        component={Feather}
                        name="check-circle"
                        className="text-primaryColor dark:text-white"
                        size={20}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => router.back()}
                      className="w-5 h-5 rounded-full justify-center items-center mr-1"
                    >
                      <StyledComponent
                        component={Entypo}
                        name="circle"
                        className="text-gray-600 dark:text-white"
                        size={20}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </>
          ))}

          {/* Room Selector */}

          {/* Add New Address */}
          <TouchableOpacity className="flex-row mt-6 items-center justify-center border border-dashed border-green-500 bg-[#F0FFF4] rounded-full h-14">
            <Text className="text-green-600 font-semibold text-base">
              + Add New Card
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Floating Continue Button */}
        <View className="absolute bottom-4 left-4 right-4 mb-6">
          <CustomButton
            title="Continue"
            buttonStyle="bg-primaryColor rounded-full h-14"
            textStyle="text-white text-lg font-semibold"
            // onPress={() => router.push("/select-payment-method")}
          />
        </View>
      </View>
    </>
  );
};

export default SelectPaymentMethod;
