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
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View
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

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

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
                      Forgot Password
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
                </View>

                <View
                  className={`justify-end pb-6 ${
                    Platform.OS === "android" ? "mt-6" : ""
                  }`}
                >

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
                        title="Send Code"
                        buttonStyle="bg-primaryColor rounded-full h-16"
                        textStyle="text-white text-lg font-semibold"
                        onPress={() => router.replace("/(auth)/create-new-password")}
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

export default ForgotPassword;