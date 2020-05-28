import React, {useState} from "react";

export default function useLocalStorage(key, intitalValue) {
    const [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        return item ? JSON.parge(item) : intitalValue; 
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storeValue, setValue]; 
}