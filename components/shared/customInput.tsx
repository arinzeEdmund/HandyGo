import React from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type CustomInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  icon?: React.ReactNode;
  inputMode?: TextInputProps["inputMode"];
  onIconPress?: () => void;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  readOnly?: boolean;
  editable?: boolean;
  error?: string | undefined;
  maxLength?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  testID?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

const CustomInput = React.forwardRef<TextInput, CustomInputProps>(
  function CustomInput(
    {
      value,
      onChangeText,
      placeholder,
      label,
      icon,
      inputMode,
      onIconPress,
      secureTextEntry = false,
      autoCapitalize = "none",
      readOnly = false,
      editable = true,
      error,
      maxLength,
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      testID,
      onBlur,
    },
    ref
  ) {
    const isEditable = editable && !readOnly;

    return (
      <View
        className="mb-4"
        testID={testID ? `${testID}-container` : undefined}
      >
        {label && (
          <Text
            style={labelStyle}
            className="mb-2 text-normal text-black dark:text-white font-poppinsMedium"
            testID={testID ? `${testID}-label` : undefined}
          >
            {label}
          </Text>
        )}

        <View
          style={containerStyle}
          className={`flex-row relative items-center justify-between h-14 px-4  rounded-lg bg-lightBlue ${
            error ? "border-red-500" : "border-gray-400"
          }`}
        >
          <TextInput
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor="#6b7280" // gray-500
            className="flex-1 h-full text-black font-poppinsMedium dark:text-white"
            style={inputStyle}
            inputMode={inputMode}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            editable={isEditable}
            testID={testID}
            onBlur={onBlur}
          />

          {icon && (
            <Pressable
              onPress={onIconPress}
              hitSlop={10}
              disabled={!onIconPress}
              testID={testID ? `${testID}-icon` : undefined}
            >
              {icon}
            </Pressable>
          )}
        </View>

        {error && (
          <Text
            style={errorStyle}
            className="mt-1 text-xs text-red-500"
            testID={testID ? `${testID}-error` : undefined}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default React.memo(CustomInput);
