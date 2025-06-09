import {
  AsyncStorageKeyType,
  AsyncStorageKeysType,
  AsyncStorageSetterType,
  AsyncStorageValueType,
} from "@/types/constant.type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export async function deleteAsyncStorageData<T extends AsyncStorageKeyType[]>(
  names: [...T]
): Promise<boolean> {
  try {
    await AsyncStorage.multiRemove(names);
    return true;
  } catch (e) {
    console.error("Error deleting async storage data:", e);
    return false;
  }
}

export async function setAsyncStorageData(data: AsyncStorageSetterType[]) {
  let defaultExpiration = 86400; // 1 day in seconds

  for (const { key, value } of data) {
    if (key === "authorization" && value?.toString().startsWith("Bearer ")) {
      try {
        const token = value?.toString().split(" ")[1];
        const decoded = jwtDecode(token);
        if (decoded?.exp) {
          const tokenExpiration = decoded.exp * 1000; // Convert to milliseconds
          defaultExpiration = Math.max(
            0,
            (tokenExpiration - Date.now()) / 1000
          ); // Ensure non-negative maxAge
        }
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    }

    const tokenValue = JSON.stringify({
      value,
      expiration: Date.now() + defaultExpiration * 1000, // Store expiration as timestamp
    });

    await AsyncStorage.setItem(key.toString(), btoa(tokenValue));
  }

  return await Promise.resolve(true);
}

export async function getAsyncStorageData<T extends AsyncStorageKeyType[]>(
  names: [...T]
): Promise<{
  [K in Extract<T[number], keyof AsyncStorageKeyType>]?: AsyncStorageValueType;
}> {
  const result: Partial<
    Record<keyof AsyncStorageKeyType, AsyncStorageValueType>
  > = {};

  const values = await AsyncStorage.multiGet(names);
  for (const [key, value] of values) {
    if (value) {
      try {
        const { value: val, expiration } = JSON.parse(atob(value));
        result[key as keyof AsyncStorageKeyType] = { value: val, expiration };
      } catch (e) {
        console.error("Failed to parse cookie:", key, e);
      }
    }
  }

  return result as {
    [K in Extract<
      T[number],
      keyof AsyncStorageKeyType
    >]?: AsyncStorageValueType;
  };
}

export async function parseAsyncStorageData<
  T extends Partial<Record<AsyncStorageKeyType, AsyncStorageValueType>>
>(cookies: T): Promise<Partial<AsyncStorageKeysType>> {
  const result: Partial<AsyncStorageKeysType> = {};

  Object.entries(cookies).forEach(([key, cookieValue]) => {
    if (cookieValue && typeof cookieValue.value === "string") {
      result[key as keyof AsyncStorageKeysType] = cookieValue.value;
    }
  });

  return Promise.resolve(result);
}
