import CustomScreenHead from "@/components/shared/customScreenHead";
import ProfileCard from "@/components/shared/profileCard";
import { Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";

const Profile = () => {
  const [enableBiometricLogin] = useState(false);
  const [logoutState, setLogoutState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enableBiometricPayment] = useState(false);

  return (
    <AlertNotificationRoot>
      <SafeAreaView className={"flex-1 bg-white dark:bg-darkModeBgColor"}>
        {/* Navigation Bar */}
        <View className="px-4 mt-2 mb-4">
          <CustomScreenHead
            back={true}
            back_title="Back"
            goBack={() => router.back()}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }} // Ensures padding at the bottom for scrollable content
        >
          <View className="flex-1 px-6 bg-gray-100 dark:bg-darkModeBgColor">
            <Text className="text-sm font-semibold text-gray-600 mb-2 mt-3 dark:text-white">
              Personal details
            </Text>
            <View className="bg-white rounded-lg mb-6 py-4 dark:bg-darkModeBgColor">
              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="user"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Profile Details"
                onIconPress={() => {
                  router.push({
                    pathname: "/profile-details",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="file-text"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Transaction history"
                onIconPress={() => {
                  router.push({
                    pathname: "/transactions-history",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="bell"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Notification"
                onIconPress={() => {
                  // router.push({
                  //   pathname: "/notifications",
                  //   params: { from: "profile" },
                  // });
                }}
              />
            </View>

            <Text className="text-sm font-semibold text-gray-600 mb-2 dark:text-white">
              Security
            </Text>
            <View className="bg-white rounded-lg mb-6 py-4 dark:bg-darkModeBgColor">
              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={MaterialIcons}
                    name="verified-user"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="KYC Verifications"
                onIconPress={() => {
                  router.push({
                    pathname: "/kyc-authentication",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={FontAwesome6}
                    name="user-lock"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Change Payment Pin"
                onIconPress={() => {
                  router.push({
                    pathname: "/request-change-pin",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={MaterialIcons}
                    name="lock-person"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <>
                    {loading ? (
                      <>
                        <ActivityIndicator
                          size={"small"}
                          className="text-primaryColor"
                        />
                      </>
                    ) : (
                      <>
                        <StyledComponent
                          component={Feather}
                          name="chevron-right"
                          className="text-black dark:text-white"
                          size={20}
                        />
                      </>
                    )}
                  </>
                }
                card_title="Forgot Payment Pin"
                disabled={loading}
                bgColor={
                  loading
                    ? "bg-gray-100 dark:bg-darkModeBgColor"
                    : "bg-white dark:bg-darkModeBgColor"
                }
                onIconPress={() => {}}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="lock"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Change Passcode"
                onIconPress={() => {
                  router.push({
                    pathname: "/request-change-passcode",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="mail"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Change Email"
                onIconPress={() => {
                  router.push({
                    pathname: "/request-change-email",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={MaterialIcons}
                    name="fingerprint"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <Switch
                    value={enableBiometricLogin}
                    onValueChange={() => {}}
                    trackColor={{ false: "#E5E7EB", true: "#80A8E0" }}
                    thumbColor={enableBiometricLogin ? "#0055B3" : "#000"}
                    style={{
                      transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                    }}
                  />
                }
                card_title="Enable Biometric Login"
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={MaterialIcons}
                    name="fingerprint"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <Switch
                    value={enableBiometricPayment}
                    onValueChange={() => {}}
                    trackColor={{ false: "#E5E7EB", true: "#80A8E0" }}
                    thumbColor={enableBiometricPayment ? "#0055B3" : "#000"}
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                  />
                }
                card_title="Enable Biometric Payment"
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={FontAwesome6}
                    name={"eye"}
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <Switch
                    value={true}
                    onValueChange={() => {}}
                    trackColor={{ false: "#E5E7EB", true: "#80A8E0" }}
                    thumbColor={"#0055B3"}
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                  />
                }
                card_title="Hide balance"
              />
            </View>

            <Text className="text-sm font-semibold text-gray-600 mb-2 dark:text-white">
              General
            </Text>
            <View className="bg-white rounded-lg mb-6 py-4 dark:bg-darkModeBgColor">
              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="help-circle"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Help and Support"
                onIconPress={() => {
                  router.push({
                    pathname: "/help-and-support",
                    params: { from: "profile" },
                  });
                }}
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="file-text"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Terms and Conditions"
                onIconPress={() =>
                  Linking.openURL(
                    "https://digitpay.finance/terms-and-conditions"
                  )
                }
              />

              <ProfileCard
                left_icon={
                  <StyledComponent
                    component={Feather}
                    name="shield"
                    className="text-primaryColor dark:text-white"
                    size={20}
                  />
                }
                right_icon={
                  <StyledComponent
                    component={Feather}
                    name="chevron-right"
                    className="text-black dark:text-white"
                    size={20}
                  />
                }
                card_title="Privacy Policy"
                onIconPress={() =>
                  Linking.openURL("https://digitpay.finance/privacy-policy")
                }
              />
            </View>

            <View className="flex-row py-4 mb-8">
              <StyledComponent
                component={Feather}
                name="log-out"
                className="text-red-500 mr-2 rotate-180"
                size={20}
                onPress={() => {
                  setLogoutState(true);
                }}
              />
              <Text
                onPress={() => {
                  setLogoutState(true);
                }}
                className="text-center text-red-600 font-poppinsSemiBold"
              >
                Logout
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* {logoutState && (
          <LogoutConfirmationModal
            logout={() => {}}
            close={() => {
              setLogoutState(false);
            }}
          />
        )} */}
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Profile;
