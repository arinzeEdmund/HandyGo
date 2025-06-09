import { NullableStringType } from "@/types/constant.type";

export type AddressType = {
  id: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  createdBy: NullableStringType;
  updatedBy: NullableStringType;
};

export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  middlename: NullableStringType;
  email: string;
  phoneNumber: NullableStringType;
  password: string;
  pin: NullableStringType;
  profilePicture: string;
  address: AddressType | null;
  addressId: NullableStringType;
  accountTierId: string;
  roleId: NullableStringType;
  referralCode: NullableStringType;
  gender: "male" | "female" | "other";
  type: "user" | "admin";
  nationality: string;
  dob: NullableStringType;
  emailVerified: boolean;
  emailVerifiedAt: string;
  accountStatus: "active" | "inactive" | "suspended";
  createdBy: NullableStringType;
  createdAt: string;
  updatedAt: string;
  updatedBy: NullableStringType;
};

export type UserStoreType = UserType & {
  updateUser: (data: Partial<UserType>) => void;
};
