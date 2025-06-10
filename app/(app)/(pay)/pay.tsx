import CustomInput from "@/components/shared/customInput";
import CustomScreenHead from "@/components/shared/customScreenHead";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const Transfer = () => {
  const [loading, setLoading] = React.useState(false);
  const [transactionsLoading, setTransactionsLoading] = useState(true);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [topTab, setTopTab] = useState("digitpay");
  const [bottomTab, setBottomTab] = useState("recents");
  const [active, setActive] = useState(false);
  const [activeBank, setActiveBank] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [bankCode, setbankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");

  const renderTransactions = () => {
    if (transactionsLoading && !showEmptyState) {
      return (
        <View className="flex-1 justify-center items-center p-4">
          <></>
        </View>
      );
    }
    return (
      <View className="flex-1 justify-center items-center p-10">
        <StyledComponent
          component={AntDesign}
          name="delete"
          className="text-gray-500 dark:text-white"
          size={24}
        />
        <Text className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          No beneficiary found
        </Text>
      </View>
    );
  };

  const renderFavouritedTransactions = () => {
    return (
      <View className="flex-1 justify-center items-center p-10">
        <StyledComponent
          component={AntDesign}
          name="delete"
          className="text-gray-500 dark:text-white"
          size={24}
        />
        <Text className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
          No beneficiary found
        </Text>
      </View>
    );
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView className={"flex-1 bg-white dark:bg-darkModeBgColor"}>
        <View>
          <View className="px-4 mt-2">
            <CustomScreenHead
              back={true}
              back_title={`${
                topTab === "other" ? "Transfer" : "Transfer to Digitpay"
              }`}
              goBack={() => router.back()}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View className="flex-1 bg-white dark:bg-darkModeBgColor">
              <View className="px-4">
                <TouchableOpacity
                  onPress={() => {}}
                  className="flex-row justify-between items-center p-4 border border-gray-300 rounded-lg mt-4 mb-4"
                >
                  <View className="flex-row justify-center items-center">
                    {/* <Image
                      source={
                        activeBank
                          ? { uri: activeBank }
                          : require("../../../assets/images/bank_icon.png")
                      }
                      className="w-6 h-6 rounded-full mr-4"
                    /> */}
                    <Text className="text-black dark:text-white">
                      {selectedBank ? selectedBank : "Select Bank"}
                    </Text>
                  </View>
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="ml-auto text-gray-500 dark:text-white"
                    size={24}
                  />
                </TouchableOpacity>
                <View>
                  <CustomInput
                    placeholder={"Enter account number"}
                    inputMode="numeric"
                    value={accountNumber}
                    onChangeText={(text) => {}}
                    secureTextEntry={false}
                    maxLength={10}
                  />
                </View>

                {loading ? (
                  <View className="pl-2 h-8 my-4 rounded-lg flex-row items-center">
                    <ActivityIndicator color={"blue"} size={"small"} />
                  </View>
                ) : (
                  <>
                    {active && selectedBank && accountHolder && (
                      <View className="bg-blue-100 h-8 my-4 rounded-lg flex-row items-center dark:bg-darkModeBgOffsetOne">
                        <StyledComponent
                          component={AntDesign}
                          name="checkcircle"
                          className="text-primaryColor ml-4 mr-2"
                          size={14}
                        />
                        <Text className="text-primaryColor text-sm dark:text-white">
                          {accountHolder}
                        </Text>
                      </View>
                    )}
                  </>
                )}

                <TouchableOpacity
                  disabled={
                    loading || !accountHolder || accountNumber.length < 10
                  }
                  onPress={() => {
                    if (!bankCode) {
                      Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: "Select Bank",
                        textBody: "Select bank you want to transfer to",
                      });
                      return;
                    } else if (accountNumber.length < 10) {
                      Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: "Invalid Account Number",
                        textBody: "Account number must be at least 10 digits",
                      });
                      return;
                    } else {
                    }
                  }}
                  className={`${
                    loading || !accountHolder || accountNumber.length < 10
                      ? "bg-[#0055B333]"
                      : "bg-primaryColor"
                  } h-14 p-4 mt-4 rounded-lg`}
                >
                  <Text
                    className={`text-center font-bold ${
                      loading || !accountHolder || accountNumber.length < 10
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between items-center px-5">
                <View className="flex-row justify-between my-6 w-[80%]">
                  <TouchableOpacity
                    onPress={() => setBottomTab("recents")}
                    className={`${
                      bottomTab === "recents"
                        ? "border-b border-primaryColor"
                        : ""
                    } w-[50%] justify-center items-center`}
                  >
                    <Text
                      className={`text-lg dark:text-white ${
                        bottomTab === "recents" ? "text-primaryColor" : ""
                      }`}
                    >
                      Recents
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setBottomTab("favourites")}
                    className={`${
                      bottomTab === "favourites"
                        ? " border-b border-primaryColor"
                        : ""
                    } w-[50%] justify-center items-center`}
                  >
                    <Text
                      className={`text-lg dark:text-white ${
                        bottomTab === "favourites" ? " text-primaryColor" : ""
                      }`}
                    >
                      Favourites
                    </Text>
                  </TouchableOpacity>
                </View>
                <StyledComponent
                  component={Feather}
                  name="search"
                  className="text-black dark:text-white ml-4 mr-2"
                  size={20}
                />
              </View>

              {bottomTab === "recents"
                ? renderTransactions()
                : renderFavouritedTransactions()}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Transfer;
