import AsyncStorage from "@react-native-async-storage/async-storage";

const FIRST_LAUNCH_KEY = "isFirstLaunch1187821";

export const checkFirstLaunch = async () => {
  try {
    const value = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
    return value !== null;
  } catch (error) {
    console.error("Error checking first launch:", error);
    return false;
  }
};

export const setFirstLaunch = async () => {
  try {
    await AsyncStorage.setItem(FIRST_LAUNCH_KEY, "true");
  } catch (error) {
    console.error("Error setting first launch:", error);
  }
};

export const setFirstLaunchFalse = async () => {
  try {
    await AsyncStorage.setItem(FIRST_LAUNCH_KEY, "false");
  } catch (error) {
    console.error("Error setting first launch:", error);
  }
};
