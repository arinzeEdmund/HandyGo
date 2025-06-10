import CustomButton from "@/components/shared/customButton";
import CustomInput from "@/components/shared/customInput";
import CustomLoadingOverlay from "@/components/shared/customLoadingOverlay";
import { initiateRegisteration } from "@/services/actions/authentication.action";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { StyledComponent } from "nativewind";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import * as Yup from "yup";

// Validation Schema
const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  consentGiven: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);


  const handleRegistration = async (values: { email: string }) => {
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
      <SafeAreaView className={`flex-1 bg-white dark:bg-darkModeBgColor`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        >
          <Formik
            initialValues={{ email: "", consentGiven: false }}
            validationSchema={RegisterSchema}
            onSubmit={handleRegistration}
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
              <View className="flex-1 px-5 justify-between dark:bg-darkModeBgColor">
                <View className="h-[50%]">
                  <View className="justify-center items-center">
                    <Text className="text-xl text-gray-800 font-bold dark:text-white mt-16">
                      Welcome to EloquentAI
                    </Text>
                    <Text className="text-gray-800 mt-1 mb-6 dark:text-white">
                      {`Let's create your account`}
                    </Text>
                  </View>
                  <View className="mt-6">
                    <CustomInput
                      placeholder={"example@gmail.com"}
                      label="Enter Your Email Address"
                      icon={
                        <StyledComponent
                          component={AntDesign}
                          name="mail"
                          className="text-gray-500 dark:text-white"
                          size={20}
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
                  
                  <View className="mt-2">
                    <CustomInput
                      placeholder={"XXXXXX"}
                      label="Enter Your Password"
                      icon={
                        <StyledComponent
                          component={Feather}
                          name={secureTextEntry ? "eye-off" : "eye"}
                          className="text-gray-500 dark:text-white"
                          size={20}
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
                  className={`h-[50%] justify-end pb-6 ${
                    Platform.OS === "android" ? "mt-6" : "mt-6"
                  }`}
                >
                  {/* Consent Checkbox */}
                  <View className="flex-row items-center mb-2">
                    {values.consentGiven ? (
                      <StyledComponent
                        component={AntDesign}
                        name="checksquareo"
                        className="text-primaryColor dark:text-white"
                        size={18}
                        onPress={() =>
                          setFieldValue("consentGiven", !values.consentGiven)
                        }
                      />
                    ) : (
                      <StyledComponent
                        component={FontAwesome5}
                        name="square"
                        className="text-gray-500 dark:text-white"
                        size={18}
                        onPress={() =>
                          setFieldValue("consentGiven", !values.consentGiven)
                        }
                      />
                    )}
                    <Text className="text-gray-600 ml-2 dark:text-white">
                      By Clicking you accept our{" "}
                      <Text className="text-blue-500">
                        Terms and Conditions
                      </Text>
                    </Text>
                  </View>

                  {touched.consentGiven && errors.consentGiven && (
                    <Text className="text-red-500 text-sm mb-4">
                      {errors.consentGiven}
                    </Text>
                  )}

                  <View className="w-full mt-4">
                    {loading ? (
                      <CustomLoadingOverlay />
                    ) : (
                      <CustomButton
                        title="Register"
                        buttonStyle="bg-primaryColor rounded-lg"
                        textStyle="text-white text-center text-lg font-semibold"
                        onPress={() => router.replace("/(auth)/onboard")}
                      />
                    )}
                  </View>

                  <View className="items-center mt-4 mb-14">
                    <Text className="text-gray-500 dark:text-white">
                      Already have an account?{" "}
                      <Text
                        className="text-blue-500"
                        onPress={() => router.push("/(auth)/login")}
                      >
                        Login
                      </Text>
                    </Text>
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

export default Register;
