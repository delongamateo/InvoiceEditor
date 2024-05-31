import { useState } from "react";

export const useLocalStorage = (
  keyName: string,
  defaultValue: string | null
) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (user: string | null) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(user);
  };

  return { storedValue, setValue };
};
