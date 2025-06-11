import CustomButton from "@/components/shared/customButton";
import CustomInput from "@/components/shared/customInput";
import CustomLoadingOverlay from "@/components/shared/customLoadingOverlay";
import { initiateRegisteration } from "@/services/actions/authentication.action";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
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

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const handleLogin = async (values: { email: string }) => {
    setLoading(true);
    const response = await initiateRegisteration({ email: values.email });
    if (response?.status) {
      showSuccessToast(response.message);
      setTimeout(() => {
        router.replace({
          pathname: "/(auth)/login",
          params: { email: JSON.stringify(values.email) },
        });
      }, 300);
    } else {
      showErrorToast(response.message);
    }
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
            onSubmit={handleLogin}
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
                  <View className="justify-center items-center">
                    <Text className="text-2xl text-gray-800 font-bold dark:text-white mt-16">
                      Sign In 
                    </Text>
                  </View>
                  <View className="mt-6">
                    <CustomInput
                      placeholder={"Enter Email Address"}
                      label="Email Address"
                      inputMode="email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={
                        touched.email && errors.email ? errors.email : undefined
                      }
                    />
                  </View>

                  <View className="mt-2">
                    <CustomInput
                      placeholder={"Enter Password"}
                      label="Password"
                      icon={
                        <StyledComponent
                          component={Feather}
                          name={secureTextEntry ? "eye-off" : "eye"}
                          className="text-gray-500 dark:text-white"
                          size={16}
                          onPress={() => setSecureTextEntry((prev) => !prev)}
                        />
                      }
                      inputMode="email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={
                        touched.email && errors.email ? errors.email : undefined
                      }
                    />
                  </View>
                </View>

                <View
                  className={`justify-end pb-6 ${
                    Platform.OS === "android" ? "mt-6" : "mt-4"
                  }`}
                >
                  {/* Consent Checkbox */}
                  <TouchableOpacity onPress={() => {
                    router.push("/(auth)/forgot-password")
                  }} className="flex-row items-end justify-end mb-2">
                    
                      <Text className="font-bold underline text-primaryColor">
                        Forgot Password
                      </Text>
                  </TouchableOpacity>

                  {touched.consentGiven && errors.consentGiven && (
                    <Text className="text-red-500 text-sm mb-4">
                      {errors.consentGiven}
                    </Text>
                  )}

                  <View className="w-full mt-8">
                    {loading ? (
                      <CustomLoadingOverlay />
                    ) : (
                      <CustomButton
                        title="Sign In"
                        buttonStyle="bg-primaryColor rounded-full h-12"
                        textStyle="text-white text-lg font-semibold"
                        onPress={() => router.replace("/(auth)/register")}
                      />
                    )}
                  </View>

                  <View className="w-full h-10 flex-row justify-between items-center mt-4">
                    <View className="w-[44%] border border-gray-300 border-dashed"></View>
                    <Text className="text-lg text-gray-900">Or</Text>
                    <View className="w-[44%] border border-gray-300 border-dashed"></View>
                  </View>

                  <View className="w-full h-10 flex-row justify-center items-center mt-8">
                    <View className="w-24 h-16 justify-center items-center bg-lightBlue rounded-lg mr-2">
                      <Image
                        source={require("../../assets/images/google.png")}
                        className="w-7 h-7"
                      />
                    </View>
                    <View className="w-24 h-16 justify-center items-center bg-lightBlue rounded-lg ml-2">
                      <Image
                        source={require("../../assets/images/facebook.png")}
                        className="w-7 h-7"
                      />
                    </View>
                  </View>

                  <View className="h-20" />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>

        {/* Fixed bottom section */}
        <View className="absolute bottom-0 left-0 right-0 bg-white dark:bg-darkModeBgColor px-5 py-8 dark:border-gray-700">
        <Text className="text-gray-900 dark:text-white text-center">
            Dont have an account?{" "}
            <Text
              className="text-primaryColor font-bold underline"
              onPress={() => router.push("/(auth)/register")}
            >
              Signup
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Login;