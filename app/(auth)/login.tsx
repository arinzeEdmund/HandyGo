import CustomButton from "@/components/shared/customButton";
import CustomInput from "@/components/shared/customInput";
import CustomLoadingOverlay from "@/components/shared/customLoadingOverlay";
import { LoginSchema } from "@/lib/utils/yup-schemas";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { StyledComponent } from "nativewind";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";

const Login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [loading] = useState<boolean>(false);

  return (
    <AlertNotificationRoot>
      <SafeAreaView className="flex-1 dark:bg-darkModeBgColor">
        <Formik
          initialValues={{ email: "", passcode: "" }}
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
          }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
            >
              <View className="flex-1 px-5 justify-between">
                <View>
                  <View className="justify-center mt-10">
                    <Text className="text-xl font-bold text-gray-800 dark:text-white">
                      Login
                    </Text>
                    <Text className="text-gray-500 mt-1 dark:text-white">
                      Get back into your account
                    </Text>
                  </View>
                  {/* Email input field */}
                  <View className="mt-16">
                    <CustomInput
                      placeholder={"example@gmail.com"}
                      label="Email Address"
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

                  {/* Password input field */}
                  <View className="mt-2">
                    <CustomInput
                      placeholder={"********"}
                      label="Passcode"
                      icon={
                        <StyledComponent
                          component={Feather}
                          name={secureTextEntry ? "eye-off" : "eye"}
                          className="text-gray-500 dark:text-white"
                          size={20}
                          onPress={() => setSecureTextEntry((prev) => !prev)}
                        />
                      }
                      inputMode="numeric"
                      value={values.passcode}
                      secureTextEntry={secureTextEntry}
                      onChangeText={handleChange("passcode")}
                      onBlur={handleBlur("passcode")}
                      error={
                        touched.passcode && errors.passcode
                          ? errors.passcode
                          : undefined
                      }
                    />
                  </View>

                  {/* Forgot password link */}
                  <View className="justify-end items-end">
                    <Text className="text-primaryColor" onPress={() => {}}>
                      Forgot Password?
                    </Text>
                  </View>
                </View>

                <View className="justify-end pb-6 mt-10">
                  {/* Conditional rendering for loading state */}
                  <View className="w-full">
                    {loading ? (
                      <CustomLoadingOverlay />
                    ) : (
                      <View className="w-full">
                        <CustomButton
                          title="Login"
                          buttonStyle="bg-primaryColor rounded-lg"
                          textStyle="text-white text-center text-lg font-semibold"
                          onPress={() => router.replace("/(app)/(home)/home")}
                          // disabled={loading}
                        />
                      </View>
                    )}
                  </View>

                  {/* Sign-up link */}
                  <View className="items-center mt-4 mb-14">
                    <Text className="text-gray-500 dark:text-white">
                      {`Don't have an account?`}{" "}
                      <Text
                        className="text-blue-500"
                        onPress={() => router.push("/(auth)/register")}
                      >
                        Create account
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Login;
