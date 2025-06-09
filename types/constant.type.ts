import {
  ChangeEvent,
  ElementType,
  FocusEvent,
  MouseEvent,
  ReactNode,
} from "react";

export type IconPropType = {
  width?: number;
  height?: number;
  fill?: string;
};

export type AsyncStorageValueType = {
  value: string;
  expiration: number;
} | null;
export type AsyncStorageSetterType = {
  key: AsyncStorageKeyType;
  value: string;
};

export type AsyncStorageKeysType = {
  authorization: string;
  longitude?: string;
  latitude?: string;
  deviceId?: string;
};
export type AsyncStorageKeyType = Partial<keyof AsyncStorageKeysType>;

export type InputElPropType = {
  error?: string;
  name: string;
  className: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  children?: ReactNode;
  label?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  suffix?: ElementType;
  borderShown?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  prefix?: ElementType;
};

export type PaginationType = {
  total: number;
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
};
export type PageLimitType = { limit?: number; page: number };
export type PageLimitParamType = Record<string, string | number> &
  PageLimitType;
export type PaginationResponseDataType<T> = {
  pagination: PaginationType;
  list: T;
};
export const pagination: PaginationType = {
  currentPage: 0,
  itemsPerPage: 0,
  nextPage: 0,
  totalPages: 0,
  prevPage: 0,
  total: 0,
};

export type APIResponseType<T> = {
  status: boolean;
  message: string;
  data: T;
};

export type DateType = Date;
export type NullableFileType = File | string;
export type NullableStringType = null | string;
export type NullableNumberType = null | number;
