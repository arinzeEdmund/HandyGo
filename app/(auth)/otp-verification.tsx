
import CustomButton from "@/components/shared/customButton";
import CustomLoadingOverlay from "@/components/shared/customLoadingOverlay";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { StyledComponent } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { OtpInput } from "react-native-otp-entry";
import * as Yup from "yup";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  consentGiven: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const OtpVerification = () => {
  const colorScheme = useColorScheme();
  const [codes, setCodes] = useState("");
  const [loading] = useState<boolean>(false);
  const [timer, setTimer] = useState(59);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    let interval: any;
    if (resendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(interval);
            setResendDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [resendDisabled]);

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView className="flex-1 bg-white dark:bg-darkModeBgColor">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Formik
            initialValues={{ email: "", consentGiven: false }}
            validationSchema={LoginSchema}
            onSubmit={() => {}}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <View className="flex-1 px-5 dark:bg-darkModeBgColor">
                <View className="">
                  <View className="w-full h-20 justify-center">
                    <View className="w-10 h-10 rounded-full bg-lightBlue justify-center items-center">
                      <StyledComponent
                        component={Feather}
                        name="arrow-left"
                        className="text-black dark:text-white"
                        size={18}
                        onPress={() =>
                          setFieldValue("consentGiven", !values.consentGiven)
                        }
                      />
                    </View>
                  </View>
                  <View className="justify-center items-center">
                    <Text className="text-2xl text-gray-800 font-bold dark:text-white">
                      Verify Account
                    </Text>
                  </View>
                  <View className=" mt-6 px-2">
                    <OtpInput
                      numberOfDigits={4}
                      onTextChange={(text) => setCodes(text)}
                      theme={{
                        pinCodeContainerStyle: {
                            height: Platform.OS === "android" ? 45 : 60,
                            width: Platform.OS === "android" ? 45 : 60,
                            backgroundColor: "#f6fafd",
                            borderWidth: 0
                          },
                        focusedPinCodeContainerStyle: {
                          borderWidth: 2,
                          borderColor: "#55b535",
                        },
                        pinCodeTextStyle: {
                          color: colorScheme === "dark" ? "#fff" : "#000",
                        },
                      }}
                    />
                  </View>
                </View>

                <View className="justify-center items-center w-full mt-8 mb-4">
                  <Text className="dark:text-white font-poppinsLight text-center text-sm">
                    Didnt get the code?{" "}
                    {resendDisabled ? (
                      <Text className="text-sm dark:text-white font-poppinsLight ml-1">
                        {formatTime(timer)}
                      </Text>
                    ) : (
                      <Text
                        onPress={() => {}}
                        className={`text-primaryColor text-lg text-sm font-poppinsMedium ml-1`}
                      >
                        Re-send OTP
                      </Text>
                    )}
                  </Text>
                </View>

                <View
                  className={`justify-end pb-6 ${
                    Platform.OS === "android" ? "mt-6" : ""
                  }`}
                >
                  <View className="w-full mt-4">
                    {loading ? (
                      <CustomLoadingOverlay />
                    ) : (
                      <CustomButton
                        title="Verify"
                        buttonStyle="bg-primaryColor rounded-full h-12"
                        textStyle="text-white text-sm font-semibold"
                        onPress={() => router.replace("/(app)/(home)/home")}
                      />
                    )}
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default OtpVerification;
