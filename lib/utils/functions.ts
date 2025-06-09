import { format, isToday, isYesterday, parseISO } from "date-fns";

export const toFixed = (number: number) => Math.round(number * 100) / 100;

export const handleInputNumberChange = (input: string) => {
  // Allow digits and one decimal point
  const numericOnly = input.replace(/[^0-9.]/g, "");

  // Prevent multiple decimals
  const parts = numericOnly.split(".");
  const cleaned =
    parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : numericOnly;

  // Detect if user is still typing a decimal number
  const isTypingDecimal = cleaned.endsWith(".");

  const number = parseFloat(cleaned);

  const formatNumber = (value: string) => {
    const parsed = parseFloat(value);
    if (isNaN(parsed)) return "";
    return parsed.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    });
  };

  return {
    raw: cleaned,
    value: isNaN(number) ? null : number,
    formatted: isTypingDecimal ? cleaned : formatNumber(cleaned), // <-- key part
  };
};

export const formatDate = (dateString: string): string => {
  if (dateString) {
    const date = parseISO(dateString);

    if (isToday(date)) {
      return `Today ${format(date, "hh:mm a")}`; // Format for today
    } else if (isYesterday(date)) {
      return `Yesterday ${format(date, "hh:mm a")}`; // Format for yesterday
    } else {
      return format(date, "MMMM d, yyyy hh:mm a"); // Format for other dates
    }
  }
  return "";
};

export const formatTimeOnly = (dateString: string): string => {
  if (dateString) {
    const date = parseISO(dateString);
    return format(date, "h:mm a"); // Only show hour and minute
  }
  return "";
};

export function objectToQueryString(obj: Record<string, string | number>) {
  return Object.keys(obj)
    .reduce(function (a: string[], k: string) {
      a.push(k + "=" + encodeURIComponent(obj[k]));

      return a;
    }, [])
    .join("&");
}

export function getValidProperties<T extends Record<string, string | number>>(
  obj: T
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // Check for non-null/undefined and non-empty string
      if (
        value !== null &&
        value !== undefined &&
        !(typeof value === "string" && value.trim() === "")
      ) {
        result[key] = value;
      }
    }
  }

  return result;
}

export const formatTime = (seconds: any) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const CapitalizeFirstLetter = (text: string | any) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const getDaySuffix = (day: any) => {
  if (day >= 11 && day <= 13) return "th";
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const formattedDay = `${day}${getDaySuffix(day)}`;
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return `${formattedDay} ${month} ${year}, ${formattedTime}`;
};

function formatMonth(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleString("default", { month: "long", year: "numeric" });
  // e.g., "May 2025"
}
